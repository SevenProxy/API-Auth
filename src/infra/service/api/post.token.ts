import { Request, Response } from "express";
import { PropsRouter } from "../../../dtos/models/props.class";
import { ClientCustomerController } from "../../../domain/client/controller/token.controller";

export default class Router implements PropsRouter {
    endPoint: string;

    constructor() {
        this.endPoint = "/auth-token";
    }

    async exe( req: Request, res: Response): Promise<void> {
        try {
            new ClientCustomerController().handle(req, res);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}
