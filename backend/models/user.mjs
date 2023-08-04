import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    bookmark: [
        {
            major: { type: String },
            subfield: { type: String },
        },
    ],
    notes: [
        {
            major: { type: String },
            subfield: { type: String },
            notes: { type: String },
        },
    ],
    password: { type: String, required: true },
});

const User = mongoose.model('student', userSchema);

export default User;
