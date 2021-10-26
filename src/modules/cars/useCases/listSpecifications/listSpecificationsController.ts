import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
    handle(request: Request, response: Response): Response {
        const all = this.listSpecificationsUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListSpecificationsController };
