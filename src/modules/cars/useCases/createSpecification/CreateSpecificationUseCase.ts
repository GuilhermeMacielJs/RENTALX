import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../../repositories/ISpecificationRepository";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) {}
    execute({ name, description }: ISpecificationDTO) {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists");
        }
        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
