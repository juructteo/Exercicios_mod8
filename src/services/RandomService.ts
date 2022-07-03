import { array } from "yargs";

export class RandomService {
  constructor() { }



  makeid = (variavel: number) => {

    const characters: string[] = ['peixe', 'praia', 'bingo', 'dança', 'vamos', 'cerveja', 'baleia',
      'vinho', 'pizza', 'sushi', 'fotografia', 'jade', 'avião', 'gato', 'manga', 'chocolate',
      'gin', 'piscina', 'sair', 'passear'];

    let result: string = "";
    let randomChoice: number = 0;
    const charactersLength: number = characters.length;

    for (let i = 0; i < Number(variavel); i++) {
      randomChoice = Math.floor(Math.random() * charactersLength)
      result += characters[randomChoice] + ' '

    }
    return result;
  }





}
