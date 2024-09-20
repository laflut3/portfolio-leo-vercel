import React from 'react'

export default function Loader() {
    return (
        <div className="flex justify-center mt-16">
            <div className="spinner"></div>
            <style jsx>{`
                        .spinner {
                            border: 8px solid #f3f3f3;
                            border-radius: 50%;
                            border-top: 8px solid #99B7DE;
                            width: 50px;
                            height: 50px;
                            animation: spin 1s linear infinite;
                        }

                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
        </div>
    )
}
