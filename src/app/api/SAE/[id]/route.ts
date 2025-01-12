import { NextResponse } from 'next/server';
import { connectDB } from '@/../Lib/MongoLib/mongodb';
import SAE from '@/../Lib/SAELib/models/SAE';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        const { id } = params;
        const deletedProject = await SAE.findByIdAndDelete(id);
        if (!deletedProject) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }
        return NextResponse.json(deletedProject, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        const { id } = params;
        const updatedData = await request.json();
        const updatedProject = await SAE.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedProject) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }
        return NextResponse.json(updatedProject, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}