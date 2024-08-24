/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function UseEffectBasics() {
    const [value, setValue] = useState(0);
    const [text, setText] = useState('');

    const GetNotifications = () => {
        setValue(prevValue => {
            const newValue = prevValue + 1;
            setTimeout(() => {
                if (newValue > 0) {
                    setText('*Check out the Document Title');
                }
            }, 500);
            return newValue;
        });
    };

    useEffect(() => {
        if (value > 0) {
            document.title = `New Notifications (${value})`;
        }
    }, [value]);

    return (
        <main className='h-screen justify-center items-center flex'>
            <div className="p-5">
                <h1 className='text-center text-2xl font-bold mt-4'>BASIC</h1>
                <article className='p-5 flex justify-center items-start'>
                    <div className='text-center border border-black p-5 rounded-lg'>
                        <h2 className='text-3xl font-bold mb-3'>{value}</h2>
                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white mt-3 transition-all duration-300 ease-in-out" onClick={GetNotifications}>Get Notifications</button>
                        <p className='mt-4 text-[13px] font-semibold'>{text}</p>
                    </div>
                </article>
            </div>
        </main>
    );
}
