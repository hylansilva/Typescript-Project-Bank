import { Router} from "express";
import { AccountController } from "../controllers/accountControllers";

export const router = Router();

// Import the controller of Account Class
const accountController = new AccountController();


//creating the HTTP methods
// GET Methods
router.get('/account',accountController.findAllAccounts);
router.get('/account/:name', accountController.findAccountByName);

// POST Methods
router.post('/account',accountController.createAccount);

// PUT Methods
router.put('/account/:name', accountController.updateAccountBalance)

// DELETE Methods
router.delete('/account', accountController.deleteAllAccounts);
router.delete('/account/:id', accountController.deleteAccountByName);


