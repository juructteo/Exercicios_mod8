import { Request, Response, NextFunction } from "express";
//import { boolean, string } from "yargs";
import { ValidarService } from "../../../services/CpfValidationService";

interface ValidationRequest {
  cpf: number


}

export class ValidationController {
  #service: ValidarService;

  constructor() {
    this.#service = new ValidarService();
  }

  validarCPF = (req: Request<ValidationRequest>, res: Response, next: NextFunction) => {
    let { cpf } = req.query;


    return res.status(200).json({
      result: this.#service.validarCPF(Number(cpf))
    });
  };

}
