"use client"

import { useEffect, useState } from 'react';

export default function FlashMessage() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const flashMessage = document.cookie
            .split('; ')
            .find(row => row.startsWith('flashMessage='))
            ?.split('=')[1];

        if (flashMessage) {
            setMessage(decodeURIComponent(flashMessage));
            // Efface le cookie après l'avoir lu
            document.cookie = 'flashMessage=; Max-Age=0; path=/';
        }
    }, []);

    return message ? <div className="flash-message">{message}</div> : null;
}