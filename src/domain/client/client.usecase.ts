import { prismaClient } from "../../infra/database/prismaClient";

export type CreateClientRequest = {
    email:      string;
    password:   string;
};

export class CreateClientUseCase {
    constructor() {}

    async authenticationUser(data: CreateClientRequest): Promise<null | CreateClientRequest> {
        await prismaClient.$connect();
        try {
            const customer = await prismaClient.client.findFirst({
                where: {
                    email: data.email,
                }
            });
            return customer;
        } finally {
            await prismaClient.$disconnect();
        }
    }

    async authenticationToken(data: CreateClientRequest): Promise<null | CreateClientRequest> {
        await prismaClient.$connect();
        try {
            const customer = await prismaClient.client.findFirst({
                where: {
                    email: data.email,
                    password: data.password,
                }
            });
            return customer;
        } finally {
            await prismaClient.$disconnect();
        }
    }
}

