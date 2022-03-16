import { getRepository, Repository } from "typeorm";

import { ICreateCarsDTO } from "@modules/cars/dtos/ICreateCarsDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;
    constructor() {
        this.repository = getRepository(Car);
    }

    async list(): Promise<Car[]> {
        return this.repository.find();
    }
    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate,
        name,
        id,
    }: ICreateCarsDTO): Promise<Car> {
        const car = await this.repository.create({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name,
            id,
        });

        await this.repository.save(car);
        return car;
    }
    async findByLicensePlate({ license_plate }): Promise<Car> {
        return this.repository.findOne({ license_plate });
    }
}

export { CarsRepository };
