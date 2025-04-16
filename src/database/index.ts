import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((err) => {
        console.error("Error connecting to the database", err);
    });
