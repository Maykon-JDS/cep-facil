import express, { Express, Request, Response }  from "express";
const app = express()
const port = 8002

app.use(express.static(__dirname + '/../public/'));

app.get('/', (req:any, res:any) => {
  res.sendFile(__dirname + "/../public/index.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(__dirname + '/../public/')
})