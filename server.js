import { exec } from 'node:child_process';
import  express  from 'express';
const app = express()
import path from "path";

const port = 3000

const fullPath = path.join('teste.mp4')
app.get('/execute', (req, res) => {
  exec(fullPath, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o arquivo executável: ${error}`);
      res.status(500).send('Erro ao executar o arquivo executável');
    } else {
      console.log(`Arquivo executável iniciado com sucesso: ${stdout}`);
      res.send('Arquivo executável iniciado com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




