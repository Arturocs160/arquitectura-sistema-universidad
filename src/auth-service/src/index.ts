import express from 'express';
import { routes } from './routes/';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(process.env.PORT || 8010, () => {
    console.log(`Server is running on port ${process.env.PORT || 8010}`)
})