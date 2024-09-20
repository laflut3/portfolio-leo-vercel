import { NextResponse } from 'next/server';
import { connectDB } from '@/../Lib/MongoLib/mongodb';
import Project from '@/../Lib/ProjectsLib/models/Projects';

export async function POST(request: Request) {
    await connectDB();

    try {
        const formData = await request.formData();
        const url = formData.get('url')?.toString();
        const type = formData.get('type')?.toString();
        const image = formData.get('image') as File | null;


        if (!url || !type) {
            return NextResponse.json({ message: 'URL and type are required' }, { status: 400 });
        }

        const newProject = new Project({
            url,
            type,
            image: image ? Buffer.from(await image.arrayBuffer()) : undefined,
        });


        const savedProject = await newProject.save();

        return NextResponse.json({ message: 'Project created successfully', Project: savedProject }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    await connectDB();

    try {
        const url = new URL(request.url);  // Parse l'URL de la requête
        const page = parseInt(url.searchParams.get('page') || '0', 10);  // Récupère le paramètre 'page'
        const limit = 10;  // Nombre de liens par page

        const Projects = await Project.find().skip(page * limit).limit(limit);
        const totalProjects = await Project.countDocuments();

        return NextResponse.json({
            Projects,
            nextPage: page + 1 < Math.ceil(totalProjects / limit) ? page + 1 : null,
        });
    } catch (error) {
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    await connectDB();

    try {
        const { id } = await request.json();
        console.log('Received ID:', id);

        if (!id) {
            return NextResponse.json({ message: 'ID is required' }, { status: 400 });
        }

        const deletedProject = await Project.findByIdAndDelete(id);
        console.log('Deleted Project:', deletedProject);

        if (!deletedProject) {
            return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting Project:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    await connectDB();

    try {
        const formData = await request.formData();
        const id = formData.get('id')?.toString();
        const url = formData.get('url')?.toString();
        const type = formData.get('type')?.toString();
        const image = formData.get('image') as File | null;

        if (!id || !url || !type) {
            return NextResponse.json({ message: 'ID, URL, and type are required' }, { status: 400 });
        }

        const updatedProject = await Project.findByIdAndUpdate(
            id,
            {
                url,
                type,
                image: image ? Buffer.from(await image.arrayBuffer()) : undefined,
            },
            { new: true }
        );

        console.log('Updated Project:', updatedProject);

        if (!updatedProject) {
            return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Project updated successfully', project: updatedProject }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
