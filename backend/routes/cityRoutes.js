import express from "express";
import { addCity, cityBlockFetch } from "../controllers/cityController.js";

const routes = express.Router();

routes.get("/cityblock-fetch", cityBlockFetch);
routes.post("/addcity",  addCity);

export default routes;
