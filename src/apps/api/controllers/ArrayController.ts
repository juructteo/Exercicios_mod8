import { Request, Response, NextFunction } from "express";
//import { boolean, string } from "yargs";
import { ArrayService } from "../../../services/ArrayService";

interface ArrayRequest {
  values: Array<string | number>
  cresce?: boolean
  one?: boolean

}

export class ArrayController {
  #service: ArrayService;

  constructor() {
    this.#service = new ArrayService();
  }

  postOrdem = (req: Request<ArrayRequest>, res: Response, next: NextFunction) => {
    let { values, cresce, one } = req.body;


    return res.status(200).json({
      result: this.#service.postOrdem(values as Array<string | number>, Boolean(cresce), Boolean(one))
    });
  };

}
