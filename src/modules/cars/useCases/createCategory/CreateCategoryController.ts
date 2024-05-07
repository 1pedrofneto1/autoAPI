import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;

        this.createCategoryUseCase.execute({ name, description });

        return res.status(201).send({ Message: "The category was created!!!" });
    }
}

export { CreateCategoryController };
