import { Request, Response } from "express";

import { GetSpecificationUseCase } from "./GetSpecificationUseCase";

class GetSpecificationController {
    constructor(private getSpecificationUseCase: GetSpecificationUseCase) {
        this.getSpecificationUseCase = getSpecificationUseCase;
    }

    handle(_req: Request, res: Response): Response {
        const specifications = this.getSpecificationUseCase.execute();

        return res.status(200).json(specifications);
    }
}

export { GetSpecificationController };
