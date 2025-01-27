export function FletHeader() {
    return (
        <header className="text-gray-600 body-font flex flex-col md:flex-row items-center justify-between p-5">
            <div className="flex items-center justify-evenly flex-row w-full">
                <a className="hidden md:flex title-font font-medium items-center text-gray-900">
                    <img src="./flet2.png" alt="tienda" className="w-15 " />
                </a>
                <nav className="hidden md:flex items-center text-base justify-evenly w-full md:w-auto">
                    <a
                        className="mr-5 hover:text-black text-xs text-gray-500 cursor-pointer"
                        href="/"
                    >
                        Inicio
                    </a>
                    <a
                        className="mr-5 hover:text-black text-xs text-gray-500 cursor-pointer"
                        href="/us"
                    >
                        Servicios
                    </a>
                    <a
                        className="mr-5 hover:text-black text-xs text-gray-500 cursor-pointer"
                        href="/us"
                    >
                        Sobre nosotros
                    </a>
                    <a
                        className="mr-5 hover:text-black text-xs text-gray-500 cursor-pointer"
                        href="/contact"
                    >
                        Contacto
                    </a>
                </nav>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0">
                <input
                    type="text"
                    name="search"
                    placeholder="Buscar"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-4xl focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-1 mr-1"
                />
                <button className="inline-flex text-black border bg-white p-1 mr-2 focus:outline-none hover:bg-black hover:text-white cursor-pointer rounded-4xl text-xs">
                    Inicio de sesión
                </button>
            </div>
        </header>
    );
}
