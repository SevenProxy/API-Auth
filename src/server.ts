import Server from "./infra/handler/http.server.settings";
import express, { Express } from "express";
const app: Express = express();

new Server(app).initialize();

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    const urlHTTP: string = `http://localhost:${PORT}/`;
    console.log(`HTTP server running on ${urlHTTP}`);
})