"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8001;
var corsOptions = {
    origin: ['http://localhost:8002', 'http://127.0.0.1:8002'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(__dirname + '/../public/'));
app.get('/', (0, cors_1.default)(corsOptions), (req, res) => {
    res.sendFile("C:/Meus Projetos/cep-facil/project/backend/build/public/main.js");
});
app.use((req, res, next) => {
    console.log('CORS Headers:', req.headers);
    next();
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(__dirname + '/../public/');
});
