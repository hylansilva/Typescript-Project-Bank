import { Router } from "express";
import { CreateAccountController, FindAllAccountController } from "../controllers/accountControllers";

export const router = Router();

// Import the controller of Account Class
const accountController = new CreateAccountController();
const findController = new FindAllAccountController();

//creating the HTTP methods
router.post('/account',accountController.createAccount);
router.get('/account',findController.findAccount);
