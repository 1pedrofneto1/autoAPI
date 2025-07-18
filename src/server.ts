import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import "reflect-metadata";

import "./database";

import "./shared/container";

import { AppError } from "./errors/AppError";
import { router } from "./routes";

const swaggerFile = YAML.load("./src/swagger.yaml");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

app.listen(3333, () => console.log("Server is running!"));
