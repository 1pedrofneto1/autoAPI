import { Request, Response } from "express";

import { GetCategoryUseCase } from "./GetCategoryUseCase";

class GetCategoryController {
    constructor(private getCategoryUseCase: GetCategoryUseCase) {
        this.getCategoryUseCase = getCategoryUseCase;
    }
    async handle(_req: Request, res: Response): Promise<Response> {
        const categories = await this.getCategoryUseCase.execute();

        return res.status(200).json(categories);
    }
}

export { GetCategoryController };
