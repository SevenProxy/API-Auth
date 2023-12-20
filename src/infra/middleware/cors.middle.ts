import cors from "cors";
import * as dotenv from "dotenv";
import { ResponseCors } from "../../dtos/types/props.middle";
dotenv.config();

const isPermit: string | undefined = process.env.FRONT_URL ?? "http://localhost:300";


const responseCors: ResponseCors = {
    value: false,
    message: "Acesso Negado!"
}

export default cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (origin !== isPermit) {
            return callback(new Error (JSON.stringify(responseCors)), false);
        }
        callback(null, true)
    },
    optionsSuccessStatus: 200,
});
