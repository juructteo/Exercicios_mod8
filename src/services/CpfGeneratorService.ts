export class GerarService {
  constructor() { }

  gerarCPF = () => {
    let newCpf: Array<number> = []
    let verificador1: number = 0
    let verificador2: number = 0
    let cpfFinal: number

    for (let index = 0; index < 9; index++) {
      newCpf[index] = Math.floor(Math.random() * 10)
      verificador1 += newCpf[index] * (index + 1)
      verificador2 += newCpf[index] * index
    }

    //digito 1
    let digito1 = verificador1 % 11
    if (digito1 === 10) { digito1 = 0 }
    newCpf[9] = digito1

    //digito2
    verificador2 += newCpf[9] * 9
    let digito2 = verificador2 % 11
    if (digito2 === 10) { digito2 = 0 }
    newCpf[10] = digito2


    cpfFinal = Number(newCpf.join(''))
    return cpfFinal

  };



}
