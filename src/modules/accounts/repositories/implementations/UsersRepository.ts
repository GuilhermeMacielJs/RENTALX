import { Repository, getRepository } from "typeorm";

import { User } from "../../entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }
    async create({
        name,
        username,
        password,
        email,
        driver_license,
        isAdmin,
    }: ICreateUserDTO): Promise<void> {
        const category = this.repository.create({
            name,
            username,
            password,
            email,
            driver_license,
            isAdmin,
        });
        await this.repository.save(category);
    }

    async findByUserName(username: string): Promise<User> {
        const user = await this.repository.findOne({ username });
        return user;
    }
}

export { UsersRepository };
