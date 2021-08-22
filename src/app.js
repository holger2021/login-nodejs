import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
// rutas
import productRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';

import e from "express";
// inicio express
const app = express();

// middlewares
app.use(express.json()); // entienda formatos json enviados al servidor
app.use(express.urlencoded({ extended: false })); // recibas datos desde formularios

// colocar nombre y valor a una variable
app.set('pkg', pkg);

// middleware de express
app.use(morgan('dev'));

// ruta index
app.get('/', (req, res) => {
  res.json({
      name: app.get('pkg').name,
      author: app.get('pkg').author,
      description: app.get('pkg').description,
      version: app.get('pkg').version
  });
});

// rutas de productos
app.use('/api/products', productRoutes);
// rutas de login
app.use('/api/auth', authRoutes);

export default app;
