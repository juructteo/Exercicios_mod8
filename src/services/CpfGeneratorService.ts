export class GerarService {
  constructor() { }

  gerarCPF = () => {
    let newCpf: Array<number> = [];
    let digito1: number = 0;
    let digito2: number = 0;

    console.log(newCpf)

    for (let i = 0; i < 9; i++) {
      newCpf[i] = Math.floor(Math.random() * 10)
      digito1 += newCpf[i] * (10 - i)
      digito2 += newCpf[i] * (11 - i)
    }

    let dig1 = digito1 % 11
    if (dig1 === 10 || dig1 === 11) { dig1 = 0 }
    newCpf[9] = 10 - dig1

    digito2 += newCpf[9] * 2
    let dig2 = digito2 * 10 % 11
    if (dig2 === 10 || dig2 === 11) { dig2 = 0 }
    newCpf[10] = 11 - dig2

    return newCpf;
  };



}
