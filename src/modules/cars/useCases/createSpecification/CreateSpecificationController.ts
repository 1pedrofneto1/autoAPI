import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationUseCase,
    ) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;

        this.createSpecificationUseCase.execute({ name, description });

        return res
            .status(201)
            .send({ Message: "The specification was created!!!" });
    }
}

export { CreateSpecificationController };
