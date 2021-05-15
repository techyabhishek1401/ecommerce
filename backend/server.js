import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
const app = express();


dotenv.config();
connectDB();
app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENVIRONMENT} mode at port ${PORT}`.yellow.bold));