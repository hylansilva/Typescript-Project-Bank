import 'reflect-metadata';
import express, { Request , Response } from 'express';
import { router } from './routes/accountRoutes';


const server = express();

server.use(express.json());
server.use(router);

server.get('/', (request:Request, response:Response)=>{
	return response.status(200).json({message:'Bank API'})
})

server.listen(666, ()=> console.log('Server ON'))
