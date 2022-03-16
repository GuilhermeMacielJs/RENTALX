import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/specificationUseCase/createSpecification/createSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/specificationUseCase/listSpecifications/listSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };
