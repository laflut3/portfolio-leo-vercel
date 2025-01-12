import { NextResponse } from 'next/server';
import { connectDB } from '@/../Lib/MongoLib/mongodb';
import SAE from '@/../Lib/SAELib/models/SAE';

export async function POST(request: Request, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        const { id } = params;
        const { texte, image } = await request.json();
        const project = await SAE.findById(id);

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        project.section = { texte, image };
        await project.save();
        return NextResponse.json(project, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        const { id } = params;
        const { texte, image } = await request.json();
        const project = await SAE.findById(id);

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        project.section = { texte, image };
        await project.save();
        return NextResponse.json(project, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        const { id } = params;
        const project = await SAE.findById(id);

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        project.section = null;
        await project.save();
        return NextResponse.json(project, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
