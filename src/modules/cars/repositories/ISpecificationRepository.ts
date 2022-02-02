import { ISpecificationDTO } from "../dtos/ISpecificationDTO";
import { Specification } from "../entities/Specification";

interface ISpecificationRepository {
    create({ name, description }: ISpecificationDTO): Promise<void>;
    list(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository };
