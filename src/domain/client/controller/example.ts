/*import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateClientUseCase, CreateClientRequest } from "../client.usecase";
import { CreateTokenInput } from "../dtos/inputs/create-token.input";
import { CreateTokenModel, TypeResolver } from "../dtos/models/create-token.models";

@Resolver(() => TypeResolver)
export class AuthClientResolver {

    @Query(() => String)
    async helloWorld(): Promise<string> {
        const client: CreateClientUseCase = new CreateClientUseCase();
        const queryClient: CreateClientRequest = {
            email: "flapbraga@gmail.com",
            password: "littlebrothe1597",
        }
        const result: CreateClientRequest | null = await client.authenticationUser(queryClient);
        console.log(result);
        return "hello world";
    }

    // @UseMiddleware
    @Mutation(() => String!)
    public async authToken(@Arg("data", () => String!) data: CreateTokenInput): Promise<string> {
        console.log(data)
        return "data";
    }
}*/
