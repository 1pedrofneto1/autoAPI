import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { router } from "./routes";

import "./database";

const swaggerFile = YAML.load("./src/swagger.yaml");

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3333, () => console.log("Server is running!"));
