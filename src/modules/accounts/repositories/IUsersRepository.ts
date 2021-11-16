import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
    isAdmin: boolean;
}

interface IUsersRepository {
    create({
        name,
        username,
        password,
        email,
        driver_license,
        isAdmin,
    }: ICreateUserDTO): Promise<void>;
    findByUserName(username: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
