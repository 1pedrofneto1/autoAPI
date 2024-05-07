import { Request, Response } from "express";

import { GetCategoryUseCase } from "./GetCategoryUseCase";

class GetCategoryController {
    constructor(private getCategoryUseCase: GetCategoryUseCase) {
        this.getCategoryUseCase = getCategoryUseCase;
    }
    handle(_req: Request, res: Response): Response {
        const categories = this.getCategoryUseCase.execute();

        return res.status(200).json(categories);
    }
}

export { GetCategoryController };
