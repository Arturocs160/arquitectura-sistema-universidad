import express from 'express';
import dotenv from 'dotenv';
import uploadRoutes from './src/routes/index.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/documents', uploadRoutes);
app.use(cors)

const PORT = process.env.PORT || 8011;
app.listen(PORT, () => {
  console.log(`📄 Documents service running on port ${PORT}`);
});
