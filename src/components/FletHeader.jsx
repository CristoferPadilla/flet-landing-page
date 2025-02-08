import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FletPagesData } from '../data';

export function FletHeader() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPages = FletPagesData.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <header className="text-gray-600 body-font flex flex-col md:flex-row items-center justify-center p-5">
            <div className="flex items-center justify-evenly flex-row w-1/2">
                <img src="./flet2.png" alt="tienda" className="w-15 " />
                <nav className="hidden md:flex items-center text-base md:justify-evenly w-full md:w-auto">
                    {FletPagesData.map(page => (
                        <Link
                            key={page.path}
                            className="mr-5 hover:text-black text-xs text-gray-500 cursor-pointer"
                            to={page.path}
                        >
                            {page.title}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 md:mr-0 relative">
                <input
                    type="text"
                    name="search"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-4xl focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-1 mr-1 md:hidden"
                />
                {searchTerm && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 z-10">
                        {filteredPages.map(page => (
                            <li key={page.path} className="p-2 hover:bg-gray-200">
                                <Link
                                    to={page.path}
                                    className="block text-xs text-gray-700"
                                    onClick={() => setSearchTerm('')}
                                >
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <button className="inline-flex text-black border bg-white p-1 mr-2 focus:outline-none hover:bg-black hover:text-white cursor-pointer rounded-4xl text-xs">
                    Inicio de sesión
                </button>
            </div>
        </header>
    );
}
