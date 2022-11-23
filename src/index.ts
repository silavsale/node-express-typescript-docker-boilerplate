import express, { Request, Response } from 'express';
import morgan from 'morgan';
const port = Number(process.env.PORT || 8080);

const app = express();
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.json({ hello: 'world' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at http://localhost:${port}`);
});
