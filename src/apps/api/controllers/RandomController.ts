import { Request, Response, NextFunction } from "express";
//import { boolean, string } from "yargs";
import { RandomService } from "../../../services/RandomService";

interface RandomRequest {
  variavel: number


}

export class RandomController {
  #service: RandomService;

  constructor() {
    this.#service = new RandomService();
  }

  makeid = (req: Request<RandomRequest>, res: Response, next: NextFunction) => {
    let { variavel } = req.query;


    return res.status(200).json({
      result: this.#service.makeid(Number(variavel))
    });
  };

}
