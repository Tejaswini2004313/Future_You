import express from 'express';
const careerRoute = express.Router();
import careerModel from '../models/career.mjs';
// import authMiddleware from '../middlewares/authMiddleware.mjs';

// Define the API endpoint to get information for a specific career and subfield by their names
careerRoute.get('/career/:careerName/:subfieldName', (req, res) => {
    const careerName = req.params.careerName;
    const subfieldName = req.params.subfieldName;

    careerModel.findOne({ name: careerName })
        .then((career) => {
            if (!career) {
                return res.status(404).json({ message: 'Career not found.' });
            }
            // Find the subfield within the career document based on the subfieldName
            const subfield = career.subFields.find((sf) => sf.name === subfieldName);
            if (!subfield) {
                return res.status(404).json({ message: 'Subfield not found for the given career.' });
            }

            res.json(subfield);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error fetching data' });
        });
});

export default careerRoute;
