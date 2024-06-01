import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
	router.get("/", homeController.getHomePage);
	router.get("/about", homeController.getAboutPage);
	router.get("/signin", homeController.getSignin);
	router.post("/post-signin", homeController.postSignin);
	router.get("/get-crud", homeController.displayGetCRUD);
	router.get("/update-crud", homeController.getUpdateCRUD);
	router.post("/put-crud", homeController.putCRUD);
	router.get("/delete-crud", homeController.deleteCRUD);

	router.post("/api/login", userController.handleLogin);

	return app.use("/", router);
};

module.exports = initWebRoutes;
