import { Request, Response, NextFunction } from "express";
//import { boolean, string } from "yargs";
import { GerarService } from "../../../services/CpfGeneratorService";



export class GeneratorController {
  #service: GerarService;

  constructor() {
    this.#service = new GerarService();
  }

  gerarCPF = (req: Request, res: Response, next: NextFunction) => {



    return res.status(200).json({
      result: this.#service.gerarCPF()
    });
  };

}
