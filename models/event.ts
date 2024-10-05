import { Schema, model, models } from 'mongoose';

const eventSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    data: { type: String, required: true },
    isInProgress: { type: Boolean, required: true },
    sectionColor: { type: String, required: true },
    link: { type: String, required: true }
});

const Event = models.Event || model('Event', eventSchema);
export default Event;
