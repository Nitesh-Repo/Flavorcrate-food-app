import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// API endpoints

app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads')); // Serve images from uploads directory

app.get('/',(req,res)=>{
    res.send('Hello World!');
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});

