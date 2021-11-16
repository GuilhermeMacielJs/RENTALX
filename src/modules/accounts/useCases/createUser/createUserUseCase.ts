import { inject, injectable } from "tsyringe";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {}
    async execute({
        name,
        username,
        password,
        email,
        driver_license,
        isAdmin,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByUserName(
            username
        );
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        this.usersRepository.create({
            name,
            username,
            password,
            email,
            driver_license,
            isAdmin,
        });
    }
}

export { CreateUserUseCase };
