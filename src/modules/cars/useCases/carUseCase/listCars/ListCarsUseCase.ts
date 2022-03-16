import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

@injectable()
class ListCarsUseCase {
    constructor(
        @inject("CarsRepository")
        private carRepository: ICarsRepository
    ) {}
    execute(): Promise<Car[]> {
        return this.carRepository.list();
    }
}
export { ListCarsUseCase };
