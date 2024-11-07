import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do .env
dotenv.config();

const { Client } = pg;
const app = express();
const port = 2000;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rota para retornar todos os logs
app.get('/logs', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM logs');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching logs:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
