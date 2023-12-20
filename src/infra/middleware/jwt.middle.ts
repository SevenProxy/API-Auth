import jwt from "jsonwebtoken";
import { Encryp } from "../../dtos/types/props.middle";

export class CryptJWT {
    execute(encryp: Encryp, key: string) {
        const token: string = jwt.sign({ token: encryp }, key, {
            expiresIn: "30d",
        });
          
        return token;
    }
}

export class UncryptJWT {
    execute(uncryp: string, key: string) {
        const token = jwt.verify(uncryp, key);
        return token;
    }
}