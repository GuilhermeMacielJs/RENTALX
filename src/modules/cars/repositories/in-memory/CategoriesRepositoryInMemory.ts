import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
    private categories: Category[] = [];

    async list(): Promise<Category[]> {
        const all = this.categories;
        return all;
    }
    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
        });
        this.categories.push(category);
    }
}
export { CategoriesRepositoryInMemory };
