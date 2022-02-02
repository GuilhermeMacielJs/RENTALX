import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";

interface ICategoriesRepository {
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository };
