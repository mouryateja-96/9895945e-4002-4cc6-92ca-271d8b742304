import express from 'express';
import cors from 'cors';
import savingsRoutes from './routes/savings';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api/savings', savingsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
