import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCategoryUseCase } from "./GetCategoryUseCase";

class GetCategoryController {
    async handle(_req: Request, res: Response): Promise<Response> {
        const getCategoryUseCase = container.resolve(GetCategoryUseCase);
        const categories = await getCategoryUseCase.execute();

        return res.status(200).json(categories);
    }
}

export { GetCategoryController };
