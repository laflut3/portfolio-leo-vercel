import mongoose, { Schema, model } from 'mongoose';

export interface ProjectDocument {
    url: string;
    type: string;
    image?: Buffer; 
}

const ProjectSchema = new Schema({
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
        required: false,
        validate: {
            validator: function (v: Buffer) {
                return true;
            },
            message: 'Invalid image buffer',
        },
    },
});

const Project = mongoose.models?.Project || model<ProjectDocument>('Project', ProjectSchema);
export default Project;
