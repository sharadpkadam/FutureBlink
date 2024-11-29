import express, { json } from "express";
import cors from "cors";
import connectDB from './config/db.js'
import apiRoutes from './routes/api.js';
import dotenv from 'dotenv';

dotenv.config();
// Create an instance of express
const app = express();
app.use(json());
app.use(cors());


// Connect to MongoDB
connectDB();

app.use('/api', apiRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
