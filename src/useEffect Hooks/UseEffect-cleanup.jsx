/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function UseEffectCleanup() {
    const [size, setSize] = useState(window.innerWidth);

    const CheckSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize', CheckSize);
        return (() => {
            console.log('cleanup');
            window.removeEventListener('resize', CheckSize);
        });
    }, [size]);
    console.log('Render');

    return (
        <main className='h-screen justify-center items-center flex bg-gray-100'>
            <div className="p-5">
                <h1 className='text-center text-2xl font-bold mt-4'>CLEAN UP</h1>
                <article className='p-5 flex justify-center items-start'>
                    <div className='text-center border border-black p-5 rounded-lg'>
                        <h2 className='text-2xl font-bold mb-3'>Window Size</h2>
                        <h2 className='text-4xl font-bold mb-3'>{size} px</h2>
                    </div>
                </article>
            </div>
        </main>
    )
}
