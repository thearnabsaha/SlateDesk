import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3001;
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { prisma } from '@workspace/database/client';

const morganFormat = ':method :url :status :response-time ms';

app.use(morgan(morganFormat));
app.use(helmet());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));


app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('hello from simple server :)');
});

// app.post('/signup', async (req, res) => {
// //   const result = SignUpSchema.safeParse(req.body);
// //   if (!result.success) {
//     // res.send(result.error.format());
// //   } else {
//     const user=await prisma.user.create({
//       data:req.body
//     });
//     res.send(user);
// //   }
// });
app.listen(port, () => console.log('> Server is up and running on port: ' + port));