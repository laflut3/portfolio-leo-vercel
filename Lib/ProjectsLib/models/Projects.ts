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
        required: true,
    },
});

const Project = mongoose.models?.Link || model<ProjectDocument>('Project', ProjectSchema);
export default Project;
