import { SpecificationRepository } from "../../repositories/implemetations/SpecificationRepository";
import { GetSpecificationController } from "./GetSpecificationController";
import { GetSpecificationUseCase } from "./GetSpecificationUseCase";

export default (): GetSpecificationController => {
    const specificationRepository = new SpecificationRepository();

    const getSpecificationUseCase = new GetSpecificationUseCase(
        specificationRepository,
    );

    const getSpecificationController = new GetSpecificationController(
        getSpecificationUseCase,
    );

    return getSpecificationController;
};
