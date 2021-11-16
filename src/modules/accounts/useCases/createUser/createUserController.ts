import { Request, response, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
    async handle(request: Request, reponse: Response): Promise<Response> {
        const { name, username, password, email, driver_license, isAdmin } =
            request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        await createUserUseCase.execute({
            name,
            username,
            password,
            email,
            driver_license,
            isAdmin,
        });
        return response.status(201).send();
    }
}
export { CreateUserController };
