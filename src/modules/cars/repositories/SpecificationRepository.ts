import { Specification } from "../models/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specifications);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (category) => category.name === name,
        );

        return specification;
    }
}

export { SpecificationRepository };
