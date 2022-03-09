import { validate as uuidValidate } from 'uuid'

import { InvalidUuidError } from "../errors/invalid-uuid.error"
import { UniqueEntityId } from "./unique-entity-id.vo"

describe('UniqueEntityId Unit Tests', () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const uuid = 'a32befd1-10e8-4285-b290-9a709c8d60bf'

    const vo = new UniqueEntityId(uuid)

    expect(vo.id).toBe(uuid)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should generate a uuid valid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const vo = new UniqueEntityId()

    expect(uuidValidate(vo.id)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})
