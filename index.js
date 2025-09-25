// Load env vars from .env if present (local dev)
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// CORS: allow any origin, only GET
app.use(cors({
  origin: '*',
  methods: ['GET'],
}));

// GET /products -> JSON array
app.get('/products', (_req, res) => {
  res.json([
    { id: 1, name: 'Dog Food',  price: 19.99 },
    { id: 2, name: 'Cat Food',  price: 34.99 },
    { id: 3, name: 'Bird Seeds', price: 10.99 }
  ]);
});

// Pick port from env or default to 3030
const port = Number(process.env.PORT || 3030);

app.listen(port, '0.0.0.0', () => {
  console.log(`Products API listening on http://localhost:${port}`);
});
