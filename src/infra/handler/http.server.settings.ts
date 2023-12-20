import express, { Express, NextFunction, Request, Response } from "express";
import { readdirSync } from 'fs';
import Cors from "../middleware/cors.middle";
import firewallHTTP from "../middleware/firewall.middlle";

export default class Server {
    private app: Express;

    constructor(app: Express) {
        this.app = app;
    }

    async initialize(): Promise<void> {
        const basePath: string = "../service/api";

        readdirSync("src/infra/service/api").forEach(async (file) => {
            const method: keyof Express = file.split(".")[0] as keyof Express;;
            const { default: Router } = await import(`${basePath}/${file}`);
            const routerInstance = new Router();
            this.app.use((req: Request, res: Response, next: NextFunction) => firewallHTTP(req, res, next))
            this.app.use(Cors)
            this.app.use(express.json());
 
            this.app[method](routerInstance.endPoint, async (req: Request, res: Response) => {
                await routerInstance.exe(req, res);
            });
        });

    }
}
