import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o banco de dados
// OBSERVAÇÃO: Altere a senha para a senha do SEU MySQL local!
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha_aqui',
    database: 'cyberhack_db'
});

// Rotas
app.get('/api/tools', async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query('SELECT * FROM tools');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar ferramentas' });
    }
});

app.get('/api/comments', async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query('SELECT * FROM comments');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar comentários' });
    }
});

app.get('/api/logs', async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query('SELECT * FROM ip_logs');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar logs' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor CyberHack rodando em http://localhost:${PORT}`);
});