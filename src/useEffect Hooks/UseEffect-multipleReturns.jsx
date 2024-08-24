/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';

export default function UseEffectMultipleReturns() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('Default User');

    useEffect(() => {
        fetch(url).then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                return res.json();
            } else {
                setIsLoading(false);
                setIsError(true);
                throw new Error(res.statusText);
            }
        }).then((user) => {
            console.log(user);
            const { login } = user;
            setUser(login);
            setIsLoading(false);
        }).catch((err) => {
            console.log(Error - err);
        })
    }, []);

    if (isLoading) {
        return (
            <main className='h-screen justify-center items-center flex bg-gray-100'>
                <div className="p-5">
                    <h1 className='text-center text-2xl font-bold mt-4'>MULTIPLE RETURNS</h1>
                    <article className='p-5 flex justify-center items-start'>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'>Loading...</h1>
                        </div>
                    </article>
                </div>
            </main>
        )
    }

    if (isError) {
        return (
            <main className='h-screen justify-center items-center flex bg-gray-100'>
                <div className="p-5">
                    <h1 className='text-center text-2xl font-bold mt-4'>MULTIPLE RETURNS</h1>
                    <article className='p-5 flex justify-center items-start'>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'>Error...</h1>
                        </div>
                    </article>
                </div>
            </main>
        )
    }

    return (
        <main className='h-screen justify-center items-center flex bg-gray-100'>
            <div className="p-5">
                <h1 className='text-center text-2xl font-bold mt-4'>MULTIPLE RETURNS</h1>
                <article className='p-5 flex justify-center items-start'>
                    <div className='text-center border border-black p-5 rounded-lg'>
                        <h2 className='text-2xl font-bold mb-3'>{user}</h2>
                    </div>
                </article>
            </div>
        </main>
    )
}
