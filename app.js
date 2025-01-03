import express from 'express';
import cors from 'cors';
import http from 'node:http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './api/main.js';
import connectDB from './src/config/db.js';
import { swaggerDocs } from './src/swagger/swaggerMiddleware.js';

export const app = express();


const { urlencoded, json } = bodyParser;
app.use(urlencoded({ extended: true, limit: '50mb' }));
app.use(json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

connectDB()

app.use('/', router);

swaggerDocs(app);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export const httpServer = http.createServer(app);
