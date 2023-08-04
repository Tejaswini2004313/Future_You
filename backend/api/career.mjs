import express from 'express';
const careerRoute = express.Router();
import careerModel from '../models/career.mjs';

// Define the API endpoint to get all information from the "career" collection
careerRoute.get('/', (req, res) => {
    careerModel.find({})
        .then((data) => {
            // console.log(data[0]);
            console.log(data[0].subFields[0]);
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error fetching data' });
        });
});

export default careerRoute;
