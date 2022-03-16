import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Category } from "./Category";

@Entity("cars")
class Car {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    daily_rate: number;

    @Column()
    license_plate: string;

    @Column()
    available: true;

    @Column()
    fine_amount: number;

    @Column()
    brand: string;

    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Category, (category) => category.car, { eager: true })
    @JoinColumn({ name: "category_id" })
    category: Category;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Car };
