import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class GetCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute() {
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { GetCategoryUseCase };
