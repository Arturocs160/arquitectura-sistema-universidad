import express from 'express';
import { routes } from './routes';
import 'dotenv/config'
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded());
routes(app);

app.listen(process.env.PORT || 8010, () => {
    console.log(`Server is running on port ${process.env.PORT || 8010}`)
})