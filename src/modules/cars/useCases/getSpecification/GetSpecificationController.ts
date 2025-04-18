import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetSpecificationUseCase } from "./GetSpecificationUseCase";

class GetSpecificationController {
    async handle(_req: Request, res: Response): Promise<Response> {
        const getSpecificationUseCase = container.resolve(
            GetSpecificationUseCase,
        );

        const specifications = await getSpecificationUseCase.execute();

        return res.status(200).json(specifications);
    }
}

export { GetSpecificationController };
