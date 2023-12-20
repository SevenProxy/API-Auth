import { NextFunction, Request, Response } from "express";

async function firewallHTTP(req: Request, res: Response, next: NextFunction): Promise<void | any> {
    const isFront: string = process.env.FRONT_URL ?? "http://localhost:300";
    if(req.headers.origin !== isFront) return res.status(403).send("Firewall indentificou um pequeno erro na sua requisição. - Você não tem permissão para enviar requisições!");

    next();
}

export default firewallHTTP;