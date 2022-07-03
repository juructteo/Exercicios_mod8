import { ArrayService } from "../../../src/services/ArrayService"

describe("ArrayService", () => {
    let _service: ArrayService
    it('estanciar corretamente a classe', () => {
        _service = new ArrayService()

        expect(_service).toBeTruthy()
    })
    it('ordem crescente sem repetição', function () {

        const ordem = _service.postOrdem([5, 1, 4, 1], true, true)

        expect(ordem).toStrictEqual([1, 4, 5])


    })
    it('ordem decrescente sem repetição', function () {

        const ordem = _service.postOrdem(["c", "a", "b", "b"], false, true)

        expect(ordem).toStrictEqual(["c", "b", "a"])


    })

    it('ordem crescente com repetição', function () {

        const ordem = _service.postOrdem([5, 1, 4, 1], true, false)

        expect(ordem).toStrictEqual([1, 1, 4, 5])

    })
    it('ordem decrescente com repetição', function () {

        const ordem = _service.postOrdem([5, 1, 4, 1], false, false)

        expect(ordem).toStrictEqual([5, 4, 1, 1])


    })


})