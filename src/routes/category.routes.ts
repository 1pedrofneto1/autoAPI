import { Router } from "express";

import {
    createCategoryController,
    getCategoryController,
} from "../modules/cars/useCases";

const categoryRoutes = Router();

categoryRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoryRoutes.get("/", (req, res) => {
    return getCategoryController.handle(req, res);
});

export { categoryRoutes };
