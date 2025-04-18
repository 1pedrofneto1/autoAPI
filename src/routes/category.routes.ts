import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { GetCategoryController } from "../modules/cars/useCases/getCategory/GetCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

const upload = multer({
    dest: "./tmp",
});

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const getCategoryController = new GetCategoryController();
const importCategoryController = new ImportCategoryController();

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", getCategoryController.handle);

categoryRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle,
);

export { categoryRoutes };
