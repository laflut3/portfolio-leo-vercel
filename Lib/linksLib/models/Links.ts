import mongoose, { Schema, model } from 'mongoose';

export interface LinkDocument {
    url: string;
    type: string;
    image?: Buffer; 
}

const LinkSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    image: {
        type: Buffer,
        required: true,
    },
});

const Link = mongoose.models?.Link || model<LinkDocument>('Link', LinkSchema);
export default Link;
