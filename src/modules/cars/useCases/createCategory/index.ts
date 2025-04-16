import { CategoryRepository } from "../../repositories/implemetations/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
    const categoryRepository = new CategoryRepository();

    const createCategotyUseCase = new CreateCategoryUseCase(categoryRepository);

    const createCategoryController = new CreateCategoryController(
        createCategotyUseCase,
    );

    return createCategoryController;
};
