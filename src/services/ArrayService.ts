export class ArrayService {
  constructor() { }



  postOrdem = (values: Array<string | number>, cresce: boolean, one: boolean) => {
    if (one) {
      values = values.filter((value, index, self) => self.indexOf(value) === index)
    }

    if (cresce) {
      return values.sort()
    } else {
      return values.sort((a, b) => (a > b ? -1 : 1))
    }

  };



}
