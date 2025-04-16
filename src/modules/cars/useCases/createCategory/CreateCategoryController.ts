import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        await this.createCategoryUseCase.execute({ name, description });

        return res.status(201).send({ Message: "The category was created!!!" });
    }
}

export { CreateCategoryController };
