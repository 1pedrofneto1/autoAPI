import { CategoryRepository } from "../repositories/implemetations/CategoryRepository";
import { SpecificationRepository } from "../repositories/implemetations/SpecificationRepository";
import { CreateCategoryController } from "./createCategory/CreateCategoryController";
import { CreateCategoryUseCase } from "./createCategory/CreateCategoryUseCase";
import { CreateSpecificationController } from "./createSpecification/CreateSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecification/CreateSpecificationUseCase";
import { GetCategoryController } from "./getCategory/GetCategoryController";
import { GetCategoryUseCase } from "./getCategory/GetCategoryUseCase";
import { GetSpecificationController } from "./getSpecification/GetSpecificationController";
import { GetSpecificationUseCase } from "./getSpecification/GetSpecificationUseCase";

const categoryRepository = CategoryRepository.getInstance();
const specificationRepository = SpecificationRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
);

const getCategoryUseCase = new GetCategoryUseCase(categoryRepository);
const getCategoryController = new GetCategoryController(getCategoryUseCase);

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
);

const getSpecificationUseCase = new GetSpecificationUseCase(
    specificationRepository,
);
const getSpecificationController = new GetSpecificationController(
    getSpecificationUseCase,
);

export {
    categoryRepository,
    specificationRepository,
    createCategoryController,
    createCategoryUseCase,
    createSpecificationController,
    createSpecificationUseCase,
    getCategoryController,
    getCategoryUseCase,
    getSpecificationController,
    getSpecificationUseCase,
};
