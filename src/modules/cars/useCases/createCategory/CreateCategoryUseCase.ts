import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository,
    ) {
        this.categoryRepository = categoryRepository;
    }
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
