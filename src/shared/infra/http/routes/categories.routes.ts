import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/categoryUseCase/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/categoryUseCase/importCategory/importCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/categoryUseCase/listCategories/listCategoriesController";

const upload = multer({
    dest: "./tmp",
});
const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoriesRoutes };
