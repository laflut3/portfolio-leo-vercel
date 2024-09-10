// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    // Configuration de Nodemailer pour utiliser Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.GMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: 'New contact Form Submission',
            html: `<p>You have a new contact form submission</p><p><strong>Name: </strong> ${name}</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false });
    }
}
