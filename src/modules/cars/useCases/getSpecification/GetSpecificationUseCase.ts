import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class GetSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository,
    ) {
        this.specificationRepository = specificationRepository;
    }

    async execute() {
        const specifications = await this.specificationRepository.list();

        return specifications;
    }
}

export { GetSpecificationUseCase };
