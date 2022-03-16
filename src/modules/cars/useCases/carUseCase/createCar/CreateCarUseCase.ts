import { inject, injectable } from "tsyringe";

import { ICreateCarsDTO } from "@modules/cars/dtos/ICreateCarsDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarsDTO): Promise<Car> {
        const carAlreadyExists = await this.carsRepository.findByLicensePlate({
            license_plate,
        });
        if (carAlreadyExists) {
            throw new AppError("Car already exists!");
        }

        const car = await this.carsRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        return car;
    }
}
export { CreateCarUseCase };
