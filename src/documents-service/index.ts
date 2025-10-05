import express from 'express';
import dotenv from 'dotenv';
import uploadRoutes from './src/routes/index.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/documents', uploadRoutes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`📄 Documents service running on port ${PORT}`);
});
