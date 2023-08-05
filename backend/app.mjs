import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import careerRoute from './api/career.mjs';
import careerByNameRoute from './api/careerByname.mjs';
import subfieldRoute from './api/subfeildByname.mjs';
import userRoute from './api/userRouter.mjs';
import connectDB from './config/db.mjs';
import bookmarkRoute from './api/bookmarkRoute.mjs';
import showBookmark from './api/showbookMark.mjs';
import addNotes from './api/addNotes.mjs';
import showNotes from './api/showNotes.mjs';
import jwt from 'jsonwebtoken'; // Import JWT library
import cors from 'cors'; // Import cors
connectDB();

const app = express();
const port = process.env.PORT || 3000;


// Enable CORS for all routes
app.use(cors());

app.use(express.json());

//Set up routes
app.use('/api/career', careerRoute);
app.use('/api', careerByNameRoute);
app.use('/api', subfieldRoute);
app.use('/api', userRoute);
app.use('/api', bookmarkRoute);
app.use('/api', showBookmark);
app.use('/api', addNotes);
app.use('/api', showNotes);



app.listen(port, () => console.log(`Server running on port ${port}`));
