import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import userRoutes from'./routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

app.use('/api/users', userRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en el Puerto ${PORT}`);
});
