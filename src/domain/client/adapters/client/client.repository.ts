import { CreateClientUseCase, CreateClientRequest } from "../../client.usecase";
import { ResponseAdapters } from "../../../../dtos/models/props.adapters";

interface PropsClientRepository {
    clientDomain: CreateClientUseCase;
}

export class ClientRepository implements PropsClientRepository {
    clientDomain: CreateClientUseCase;
    constructor() {
        this.clientDomain = new CreateClientUseCase();
    };

    async authLogin(dto: CreateClientRequest): Promise<ResponseAdapters> {
        const result = await this.clientDomain.authenticationUser(dto);
        if(!result) return {
            value: false,
            message: "Usuário não foi encontrado!"
        };

        return {
            value: true,
            data: result,
            message: "Success"
        }
    }

    async authTOken(dto: CreateClientRequest): Promise<ResponseAdapters> {
        const result = await this.clientDomain.authenticationToken(dto);
        if(!result) return {
            value: false,
            message: "Usuário não foi encontrado!"
        };

        return {
            value: true,
            data: result,
            message: "Success"
        }
    }
}