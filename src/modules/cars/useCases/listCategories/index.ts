import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

export default (): ListCategoriesController => {
    const categoriesRepository = null;
    const listCategoriesUseCase = new ListCategoriesUseCase(
        categoriesRepository
    );
    const listCategoriesController = new ListCategoriesController(
        listCategoriesUseCase
    );
    return listCategoriesController;
};
