import { ICreateCarsDTO } from "@modules/cars/dtos/ICreateCarsDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
    private cars: Car[] = [];

    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        name,
        license_plate,
        id,
    }: ICreateCarsDTO): Promise<Car> {
        const car = new Car();

        Object.assign(car, {
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
            license_plate,
            id,
        });
        await this.cars.push(car);
        return car;
    }
    async list(): Promise<Car[]> {
        return this.cars;
    }
    async findByLicensePlate({ license_plate }): Promise<Car> {
        return this.cars.find((car) => car.license_plate === license_plate);
    }
}

export { CarsRepositoryInMemory };
