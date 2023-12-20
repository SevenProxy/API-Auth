import { Request, Response } from "express";
import { ClientRepository } from "../adapters/client/client.repository";
import { ResponseAdapters } from "../../../dtos/models/props.adapters";
import { encryptData } from "../../../infra/middleware/crypto.middle";
import { CryptJWT } from "../../../infra/middleware/jwt.middle";
import { Encryp } from "../../../dtos/types/props.middle";
import { Client } from "../../../dtos/types/cilent";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export class ClientCustomerController {
    constructor() {}

    async handle(request: Request, response: Response) {
        const adaptersClient = new ClientRepository();
        try {
            const { email, password } = request.body;
            const user: Encryp = { 
                email: encryptData(email).hash,
                password: "",
            }

            const result: ResponseAdapters = await adaptersClient.authLogin(user);
            if(!result.value) return response.status(400).send(result.message);
            const isUser: Client = result?.data;

            const isPassword = await bcrypt.compare(password, isUser.password);

            if(!isPassword) return response.status(403).send("Senha incorreta!");

            const token: CryptJWT = new CryptJWT();
            const tokenGenertic = {
                email: isUser.email,
                password: isUser.password,
            };
            return response.status(200).json({
                token: token.execute(tokenGenertic, process.env.KEY ?? "senve"),
            });
        } catch(err) {
            return response.status(500).send(err);
        }
    }
}