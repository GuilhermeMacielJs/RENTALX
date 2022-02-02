import { getRepository, Repository } from "typeorm";

import { ISpecificationDTO } from "../../dtos/ISpecificationDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;
    constructor() {
        this.repository = getRepository(Specification);
    }
    /*

    Conceito de singleton
    private static INSTANCE: SpecificationRepository;
    public static getInstance() {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    } */
    async create({ name, description }: ISpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });
        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationRepository };
