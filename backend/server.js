import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/dbConnect';
import { userRoutes } from './routes/users/usersRoutes';

//load ENV files
dotenv.config();
//DB Connect
dbConnect();
//app
const app = express();

//middleware
app.use(express.json());
//routes
app.use('/api/users', userRoutes);

//Server
const PORT = process.env.PORT || process.env.DEV_PORT;
app.listen(PORT, console.log(`Server is runing on port ${PORT}`));
