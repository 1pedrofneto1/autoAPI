import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "nlwrocketseat",
    entities: ["src/modules/cars/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
});
