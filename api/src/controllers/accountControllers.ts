import { Request, Response } from "express";
import { prismaClient } from "../client/prismaClient";

export class CreateAccountController {
	async createAccount(request:Request, response:Response) {
		const { name, balance, type} = request.body;

		const account = await prismaClient.account.create({
			data:{
				name,
				balance,
				type,
			},
		})
		return response.status(200).json(account);
	}

}

export class FindAllAccountController{
	async findAccount(request:Request, response:Response){

		const account = await prismaClient.account.findMany();

		return response.json(account);
	}

	async findExpecificAccount(request:Request, response:Response){

	}
}

