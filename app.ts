import express, { type Request, type Response } from "express";

const app = express();
app.use(express.json())

// Ele tenta pegar a porta do servidor, se não existir, usa a 3000
const port = process.env.PORT || 3000;

interface jogo {
  id: number;
  nome: string;
  genero: string;
}

let meusJogos: jogo[] = [
  { id: 1, nome: "The Witcher 3", genero: "RPG" },
  { id: 2, nome: "Valorant", genero: "FPS" },
  { id: 3, nome: "Minecraft", genero: "Sandbox" },
];

app.get("/api/jogos", (req:Request, res:Response) => {
  res.json(meusJogos);
});

app.post('/api/jogos',(req:Request, res:Response)=>{
  const novoJogo = req.body;
  meusJogos.push(novoJogo)
  res.status(201).json({mensagem: "Jogo adicionado com sucesso!"})
})

app.listen(port, () => {
  console.log(`🚀 Servidor TS rodando em http://localhost:${port}/api/jogos`);
});
