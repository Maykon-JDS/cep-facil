import express, { Express, Request, Response }  from "express";
import cors from "cors";

const app = express()
const port = 8001

var corsOptions = {
  origin: ['http://localhost:8002', 'http://127.0.0.1:8002'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(express.static(__dirname + '/../public/'));

app.get('/', cors(corsOptions), (req:any, res:any) => {
  res.sendFile("C:/Meus Projetos/cep-facil/project/backend/build/public/main.js");
})

app.use((req:any, res:any, next:any) => {
  console.log('CORS Headers:', req.headers);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(__dirname + '/../public/')
})
