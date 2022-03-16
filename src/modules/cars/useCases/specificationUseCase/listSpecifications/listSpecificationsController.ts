import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "@modules/cars/useCases/specificationUseCase/listSpecifications/listSpecificationsUseCase";

class ListSpecificationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationsUseCase = container.resolve(
            ListSpecificationsUseCase
        );
        const all = await listSpecificationsUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListSpecificationsController };
