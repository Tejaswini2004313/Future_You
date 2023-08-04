import { Schema, model } from 'mongoose';

const careerOpportunitySchema = new Schema({
    name: String,
    description: String
});

const collegeSchema = new Schema({
    name: String,
    city: String,
    state: String
});

const subFieldSchema = new Schema({
    name: String,
    description: String,
    scope: String,
    careerOpportunities: [careerOpportunitySchema],
    colleges: [collegeSchema]
});


const careerSchema = new Schema({
    name: String,
    description: String,
    subFields: [subFieldSchema],


});

const CareerModel = model('career', careerSchema);
export default CareerModel;

// Now you can use the CareerModel to interact with your MongoDB "career" collection.
