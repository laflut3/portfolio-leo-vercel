// components/ValidationPopup.tsx

import React from 'react';

interface ValidationPopupProps {
    title: string;
    text: string;
    onClose: () => void;
}

const ValidationPopUp: React.FC<ValidationPopupProps> = ({ title, text, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center text-black bg-black backdrop-blur bg-opacity-50 font-light">
            <div className="bg-white rounded-lg border-4 border-secondary p-8 max-w-md text-center shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <hr className="border-t-2 border-red-500 mb-4 w-1/3 mx-auto"/>
                <p className="mb-8">{text}</p>
                <button
                    onClick={onClose}
                    className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-orange-400"
                >
                    FERMER LA POPUP
                </button>
            </div>
        </div>
    );
};

export default ValidationPopUp;
