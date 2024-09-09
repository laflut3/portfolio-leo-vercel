import { NextResponse } from 'next/server';
import { connectDB } from '@/../_lib/mongoLib/mongodb';
import Link from '@/../_lib/linksLib/models/Links';

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

        const newLink = new Link({
            url,
            type,
            image: image ? Buffer.from(await image.arrayBuffer()) : undefined,
        });


        const savedLink = await newLink.save();

        return NextResponse.json({ message: 'Link created successfully', link: savedLink }, { status: 201 });
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

        const links = await Link.find().skip(page * limit).limit(limit);
        const totalLinks = await Link.countDocuments();

        return NextResponse.json({
            links,
            nextPage: page + 1 < Math.ceil(totalLinks / limit) ? page + 1 : null,
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

        const deletedLink = await Link.findByIdAndDelete(id);
        console.log('Deleted Link:', deletedLink);

        if (!deletedLink) {
            return NextResponse.json({ message: 'Link not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Link deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting link:', error);
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

        const updatedLink = await Link.findByIdAndUpdate(
            id,
            {
                url,
                type,
                image: image ? Buffer.from(await image.arrayBuffer()) : undefined,
            },
            { new: true }
        );

        console.log('Updated Link:', updatedLink);

        if (!updatedLink) {
            return NextResponse.json({ message: 'Link not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Link updated successfully', link: updatedLink }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
