import express, { json } from 'express';
import sequelize from './database/database';
const app = express();

//Importing Routes
import billRoutes from './routes/bill';
import costumerRoutes from './routes/costumer';
import productRoutes from './routes/product';
import shoppingCartRoutes from './routes/shopping_cart';

//middlewares
app.use(json());

// Routes
app.use('/api/bill',billRoutes);
app.use('/api/costumer',costumerRoutes);
app.use('/api/product',productRoutes);
app.use('/api/cart',shoppingCartRoutes);

sequelize.sync()
  .then(() => {
    console.log('DB synced');
  });

export default app;