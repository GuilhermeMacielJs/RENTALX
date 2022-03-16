import { hash } from "bcryptjs";
import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection("localhost");

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USERS(id, name, password, email, "isAdmin", created_at, driver_license) values('${id}', 'Guilherme','${password}', 'guilherme.maciel@alcans.com.br', true, 'now()', 'xxxxx')`
    );

    await connection.close;
}

create().then(() => console.log("User admin created!"));
