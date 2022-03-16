import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Car } from "./Car";

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Car, (car) => car.category)
    car: Car;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };
