import React from 'react';
import Image from 'next/image';

interface SiteCardProps {
    id: number;
    title: string;
    url: string;
    image: string;
    type: string;
}

export default function SiteCard({ id, title, url, image, type }: SiteCardProps) {
    return (
        <div className="relative bg-tertiary rounded-3xl shadow-md p-4 flex flex-col items-center w-[300px] h-[220px]">
            <div className="absolute top-4 left-4 w-16 h-16 rounded-full overflow-hidden">
                <Image
                    src={image}
                    alt="Logo"
                    width={64}
                    height={64}
                    className="object-cover "
                />
            </div>
            <p
                className='text-tertiary text-center font-bold text-lg mt-4'
            >
                {title}
            </p>
            <div className="w-full h-1/2 rounded-md mb-4">
                <a href={url} className="bg-secondary text-primary px-4 py-2 rounded-full absolute bottom-4 right-4">
                    En savoir +
                </a>
            </div>
        </div>
    );
}
