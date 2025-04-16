import { Router } from "express";

import createSpecificationController from "../modules/cars/useCases/createSpecification/index";
import getSpecificationController from "../modules/cars/useCases/getSpecification/index";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
    return createSpecificationController().handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
    return getSpecificationController().handle(req, res);
});

export { specificationRoutes };
