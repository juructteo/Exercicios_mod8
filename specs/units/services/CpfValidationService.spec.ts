
import { ValidarService } from "../../../src/services/CpfValidationService"

describe("RandomService", () => {
    let _service: ValidarService
    it('estanciar corretamente a classe', () => {
        _service = new ValidarService()

        expect(_service).toBeTruthy()
    })

    it('Deveria validar quando inserido um cpf existente', () => {
        // Arrange
        const new_doc = 22788643825
        // Act
        const result = _service.validarCPF(new_doc)
        // Assert
        expect(result).toThrow()
    })

    it('Deveria estourar um erro, quando passado um tamanho incorreto ', () => {

        expect(() => _service.validarCPF(52145826522556)).toThrow('Apenas 11 são digitos são permitidos.')


    })

    it('Deveria estourar um erro, quando passado um tamanho incorreto ', () => {

        expect(() => _service.validarCPF(5214)).toThrow('São necessários 11  digitos.')


    })

    it('Deveria estourar um erro, quando passado um tipo incorreto NaN', () => {
        expect(() => _service.validarCPF(Number.NaN)).toThrow()
    })

    it('Deveria estourar um erro ao passar um número negativo', () => {
        expect(() => _service.validarCPF(-25215)).toThrow()
    })


})