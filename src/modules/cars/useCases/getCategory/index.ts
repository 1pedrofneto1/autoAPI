import { CategoryRepository } from "../../repositories/implemetations/CategoryRepository";
import { GetCategoryController } from "./GetCategoryController";
import { GetCategoryUseCase } from "./GetCategoryUseCase";

export default (): GetCategoryController => {
    const categoryRepository = new CategoryRepository();

    const getCategoryUseCase = new GetCategoryUseCase(categoryRepository);

    const getCategoryController = new GetCategoryController(getCategoryUseCase);

    return getCategoryController;
};
