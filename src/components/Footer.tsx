import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='border-t-4 border-white w-full bg-primary py-8 px-4 md:px-8 flex flex-col md:flex-row justify-center items-center'>
            <div className='flex flex-col items-center md:items-start md:w-1/3 mb-8 md:mb-0'>
                <h4 className='text-white text-lg md:text-xl mb-4 text-center md:text-left'>RAPIDE CONTACT</h4>
                <div className='flex items-center mb-4'>
                    <Image src='/assets/mail-icon.svg' alt='Mail icon' width={24} height={24} />
                    <p className='ml-2 text-white text-sm md:text-base'>leo0609leo@gmail.com</p>
                </div>
                <div className='flex items-center mb-4'>
                    <Image src='/assets/phone-icon.png' alt='Phone icon' width={24} height={24} />
                    <p className='ml-2 text-white text-sm md:text-base'>07.83.08.49.92</p>
                </div>
                <div className='flex items-center'>
                    <Image src='/assets/location-icon.png' alt='Location icon' width={24} height={24} />
                    <p className='ml-2 text-white text-sm md:text-base'>206 rue du triolet, 34090 Montpellier</p>
                </div>
            </div>
            <div className='flex justify-center items-center md:w-1/3 mb-8 md:mb-0'>
                <p className='text-white text-3xl md:text-7xl font-erasbold text-center'>
                    LEO TORRES
                </p>
            </div>
            <div className='flex flex-col items-center md:items-end md:w-1/3'>
                <a href="#top" className='flex items-center mb-6 text-white text-sm md:text-base'>
                    Retournez en haut
                    <Image src='/assets/up-arrow-icon.svg' alt='Up arrow icon' width={24} height={24} className='ml-2' />
                </a>
                <div className="flex space-x-2 md:space-x-4">
                    <a href="https://www.linkedin.com/in/leo-torres-804687264/" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-full bg-tertiary border border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                            <Image src='/assets/linkedin-icon.svg' alt='LinkedIn icon' width={24} height={24} />
                        </button>
                    </a>
                    <a href="https://github.com/laflut3/" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-full bg-tertiary border border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                            <Image src='/assets/github-icon.svg' alt='GitHub icon' width={24} height={24} />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/le0_trs/" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-full bg-tertiary border border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                            <Image src='/assets/insta-icon.png' alt='Instagram icon' width={24} height={24} />
                        </button>
                    </a>
                </div>
            </div>
        </footer>
    );
}
