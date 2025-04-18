import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { GetSpecificationController } from "../modules/cars/useCases/getSpecification/GetSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const getSpecificationController = new GetSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", getSpecificationController.handle);

export { specificationRoutes };
