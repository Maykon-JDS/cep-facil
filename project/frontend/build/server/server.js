"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8002;
app.use(express_1.default.static(__dirname + '/../public/'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/../public/index.html");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(__dirname + '/../public/');
});
