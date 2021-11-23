import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {}
    async execute({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        try {
            const userAlreadyExists = await this.usersRepository.findByEmail(
                email
            );
            if (userAlreadyExists) {
                throw new AppError("User already exists", 400);
            }
            const passwordHash = await hash(password, 8);
            this.usersRepository.create({
                name,
                password: passwordHash,
                email,
                driver_license,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export { CreateUserUseCase };
