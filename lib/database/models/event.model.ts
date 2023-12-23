import { Document, Schema, Types, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: String,
    title: String,
    description: String,
    location: String,
    createdAt: Date,
    imageUrl: String,
    startDateTime: Date,
    endDateTime: Date,
    price?: String,
    isFree: boolean,
    url?: String,
    category: { _id: String, name: String },
    organizer: { _id: String, firstName: String, lastName: String }

}

const EventsSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, require: true},
    startDateTime: {type: Date, default: Date.now},
    endDateTime: {type: Date, default: Date.now},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    url: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type: Schema.Types.ObjectId, ref: 'User'},
})

const Event = models.Event || model('Event', EventsSchema);

export default Event;