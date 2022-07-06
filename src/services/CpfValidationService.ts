export class ValidarService {
  constructor() { }



  validarCPF = (cpf: number) => {
    let arrayCPF = Array.from(String(cpf), Number)
    if (arrayCPF.length != 11)
      return ('CPF inválido');

    //validando 1o digito
    let soma: number = 0;
    for (let i: number = 0; i < 9; i++)
      soma += arrayCPF[i] * (10 - i);
    let ver: number = 11 - (soma % 11);
    if (ver == 10 || ver == 11)
      ver = 0;
    if (ver != (arrayCPF[9]))
      return ('CPF inválido');

    //validando 2o digito
    soma = 0;
    for (let i: number = 0; i < 10; i++)
      soma += arrayCPF[i] * (11 - i);
    ver = 11 - (soma % 11);
    if (ver == 10 || ver == 11)
      ver = 0;
    if (ver != (arrayCPF[10]))
      return ('CPF inválido');
    return true;
  };



}
