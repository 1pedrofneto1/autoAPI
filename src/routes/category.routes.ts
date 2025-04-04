import { Router } from "express";
import multer from "multer";

import {
    createCategoryController,
    getCategoryController,
    importCategoryController,
} from "../modules/cars/useCases";

const upload = multer({
    dest: "./tmp",
});

const categoryRoutes = Router();

categoryRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoryRoutes.get("/", (req, res) => {
    return getCategoryController.handle(req, res);
});

categoryRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res);
});

export { categoryRoutes };
