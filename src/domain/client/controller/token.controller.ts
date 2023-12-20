import { Request, Response } from "express";
import { ClientRepository } from "../adapters/client/client.repository";
import { JwtPayload } from "jsonwebtoken";
import { ResponseAdapters } from "../../../dtos/models/props.adapters";
import { unencryptData } from "../../../infra/middleware/crypto.middle";
import { UncryptJWT } from "../../../infra/middleware/jwt.middle";
import { Client } from "../../../dtos/types/cilent";
import dotenv from "dotenv";
dotenv.config();

export class ClientCustomerController {
    constructor() {}

    async handle(request: Request, response: Response) {
        const adaptersClient = new ClientRepository();
        try {
            const { token } = request.body;

            const jwt: UncryptJWT = new UncryptJWT();
            const resutlJWT = jwt.execute(token, process.env.KEY ?? "seven") as JwtPayload;
            if(!resutlJWT) return response.status(403).send("Token inválido!");

            const { email, password } = resutlJWT.token;
            
            const result: ResponseAdapters = await adaptersClient.authTOken({ email, password });
            if(!result.value) return response.status(400).send(result.message);
            const isUser: Client = result?.data;

            response.status(200).json({
                email: unencryptData(isUser.email),
                id: isUser.id,
            });
        } catch(err) {
            return response.status(500).send(err);
        }
    }
}
