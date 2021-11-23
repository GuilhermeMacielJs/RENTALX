import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../../repositories/ISpecificationRepository";

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationRepository
    ) {}
    async execute({ name, description }: ISpecificationDTO) {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new AppError("Specification Already Exists", 400);
        }
        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
