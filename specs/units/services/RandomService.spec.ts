
import { RandomService } from "../../../src/services/RandomService"

describe("RandomService", () => {
    let _service: RandomService
    it('estanciar corretamente a classe', () => {
        _service = new RandomService()

        expect(_service).toBeTruthy()
    })
    it('deve-se obter x palavras aleatórias, sendo x um numero inserido pelo usuario', () => {

        const words = _service.makeid(10)
        const result = words.split(' ').length
        expect(result).toBe(10)



    })
    it('deve-se obter x palavras aleatórias, sendo x um numero inserido pelo usuario', () => {

        const words = _service.makeid(2)
        const result = words.split(' ').length
        expect(result).toHaveLength(2)



    })

})