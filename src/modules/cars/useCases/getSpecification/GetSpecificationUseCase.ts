import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class GetSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }

    execute() {
        const specifications = this.specificationRepository.list();

        return specifications;
    }
}

export { GetSpecificationUseCase };
