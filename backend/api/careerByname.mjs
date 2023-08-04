import express from 'express';
const careerRoute = express.Router();
import careerModel from '../models/career.mjs';

// Define the API endpoint to get information for a specific career by its name
careerRoute.get('/career/:name', (req, res) => {
    const careerName = req.params.name;

    careerModel.findOne({ name: careerName })
        .then((career) => {
            if (career) {
                res.json(career);
            } else {
                res.status(404).json({ message: 'Career not found.' });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error fetching data' });
        });
});

export default careerRoute;

