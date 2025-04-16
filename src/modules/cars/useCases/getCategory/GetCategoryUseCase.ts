import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class GetCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();

        return categories;
    }
}

export { GetCategoryUseCase };
