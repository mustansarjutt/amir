import { Router } from "express";
import { sayHello, getProduct } from "../controllers/practice.controller.js";

const practiceRouter = Router();

practiceRouter.get("/hello", sayHello);
practiceRouter.get("/product", getProduct);

export {
  practiceRouter,
};