import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUSerRepository } from "../../repositories/IUSerRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUSerRepository,
    ) {}

    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
