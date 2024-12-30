import express from "express";
import { rateCalculate, rateFetch, updateRates } from "../controllers/rateController.js";

const router = express.Router();

router.post("/calculaterate",rateCalculate);
router.post("/update-route",updateRates);
router.get("/rate-fetch",rateFetch);


export default  router