import { Router } from "express";

import {
    createSpecificationController,
    getSpecificationController,
} from "../modules/cars/useCases";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
    return getSpecificationController.handle(req, res);
});

export { specificationRoutes };
