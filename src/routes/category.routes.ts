import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory/index";
import getCategoryController from "../modules/cars/useCases/getCategory/index";
import importCategoryController from "../modules/cars/useCases/importCategory/index";

const upload = multer({
    dest: "./tmp",
});

const categoryRoutes = Router();

categoryRoutes.post("/", (req, res) => {
    return createCategoryController().handle(req, res);
});

categoryRoutes.get("/", (req, res) => {
    return getCategoryController().handle(req, res);
});

categoryRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController().handle(req, res);
});

export { categoryRoutes };
