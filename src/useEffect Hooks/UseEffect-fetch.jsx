/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users';

export default function UseEffectFetch() {
    const [users, setUsers] = useState([]);

    const getUsers = async (req, res) => {
        const response = await fetch(url);
        const users = await response.json();

        setUsers(users);
        console.log(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <main className="h-full w-full flex justify-center items-center bg-gray-100 py-10">
            <div className="w-full p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">FETCH</h1>
                <article className="flex justify-center">
                    <div className="w-[60rem] p-10">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">GitHub Users</h2>
                        <ul className="grid grid-cols-3 gap-10">
                            {users.map((user) => {
                                const { id, login, avatar_url, html_url } = user;
                                return (
                                    <li key={id} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
                                        <img src={avatar_url} alt={login} className="w-24 h-24 rounded-full border border-gray-300 mb-4" />
                                        <h4 className="text-lg font-medium text-gray-800">{login}</h4>
                                        <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2">
                                            Profile
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </article>
            </div>
        </main>
    )
}
