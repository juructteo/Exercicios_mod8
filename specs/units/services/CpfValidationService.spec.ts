
import { ValidarService } from "../../../src/services/CpfValidationService"

describe("RandomService", () => {
    let _service: ValidarService
    it('estanciar corretamente a classe', () => {
        _service = new ValidarService()

        expect(_service).toBeTruthy()
    })

    it('Deveria validar quando inserido um cpf existente', () => {
        // Arrange
        const new_doc = 22788643861
        // Act
        const result = _service.validarCPF(new_doc)
        // Assert
        expect(result).not.toThrow()
    })

    it('Deveria estourar um erro, quando passado um tamanho incorreto ', () => {

        expect(() => { _service.validarCPF(52145826522556) }).toThrow('CPF Invalido. São somente 11 digitos')


    })

    it('Deveria estourar um erro, quando passado um tamanho incorreto ', () => {

        expect(() => { _service.validarCPF(5214) }).toThrow('CPF Invalido. São no minimo 11 digitos')


    })

    it('Deveria estourar um erro, quando passado um tipo incorreto NaN', () => {
        expect(() => { _service.validarCPF(Number.NaN) }).toThrow()
    })

    it('Se um número negativo for passador, deve falhar', () => {
        expect(() => { _service.validarCPF(-123123) }).toThrow("CPF não pode ser negativo")
    })



})