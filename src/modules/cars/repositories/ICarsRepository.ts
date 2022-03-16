import { ICreateCarsDTO } from "@modules/cars/dtos/ICreateCarsDTO";

import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
    create(data: ICreateCarsDTO): Promise<Car>;
    list(): Promise<Car[]>;
    findByLicensePlate({ license_plate }): Promise<Car>;
}

export { ICarsRepository };
