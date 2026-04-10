import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import userRoutes from'./routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3006;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el Puerto ${PORT}`);
});
