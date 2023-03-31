import { Request, Response } from "express";
import { prisma } from "../client/prismaClient";


export class AccountController{
 // CREATE
	async createAccount(request:Request, response:Response) {
		const { name, balance, type} = request.body;

		const account = await prisma.account.create({
			data:{
				name,
				balance,
				type,
			},
		});
		try {
			return response.status(202).json({message:'Account has been created'});
		} catch (error) {
			return response.status(401).json({message:'Unauthorized'});
		}
	}
	//READ
	async findAllAccounts(request:Request, response:Response){

		const account = await prisma.account.findMany();

		return response.json(account);
	}

	async findAccountByName(request:Request, response:Response) {
		const  id = request.params.name;
		const account = await prisma.account.findUnique({
			where:{
				name: id
			}
		})
			return response.status(200).json({account: account})
	}
	//UPDATE
	async updateAccountBalance(request:Request, response:Response){
		const id = request.params.name;
		const { balance } = request.body;
		const findAccount = await prisma.account.findUnique({
			where:{
				name: id
			},
			select: {
				balance
			}
		})

		let amontOne = Number(balance);
		let amontTwo = Number(findAccount);

		let finalBalance = amontOne+ amontTwo

		const updateAccount = await prisma.account.update({
			data:{
				balance: finalBalance
			},
			where:{
				name:id
			},
		})
		response.status(200).json({message:'Account has been updated'})
	}
	//DELETE
	async deleteAllAccounts(request: Request, response: Response){
		const accounts = await prisma.account.deleteMany({});
		try {
			return response.status(202).json({message:'All Accounts has been delected'});
		} catch (error) {
			return response.status(401).json({message:'Unauthorized'});
		}
	}

	async deleteAccountByName(request:Request, response:Response){
		const id = request.params.name;
		const account = await prisma.account.delete({
			where:{
				name: id
			},
		});
		try {
			return response.status(202).json({message:'Account has been delected'});
		} catch (error) {
			return response.status(401).json({message:'Unauthorized'});
		}
	}
}

