import { Schema, model, models } from 'mongoose';

const regSchema = new Schema({
    isActive: { type: Boolean, required: true },
    urlToForm: { type: String, required: true }
});

const Registration = models.Registration || model('Registration', regSchema);
export default Registration;
