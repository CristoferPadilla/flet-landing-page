import { useState } from "react";
import { FletHeader } from "../components/FletHeader";
import { FletFooter } from "../components/FletFooter";
import { FletCard } from "../components/FletCards";
import { FletBlogsData } from "../data";

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const filteredBlogs = FletBlogsData.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    return (
        <section className="text-gray-600 body-font min-h-screen flex flex-col bg-gray-100">
            <FletHeader />
            <div className="flex-grow container mx-auto px-5 py-24">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
                    <p className="text-lg text-gray-600 mx-auto max-w-2xl">
                        ¡Bienvenido al blog de Flet! Aquí encontrarás las últimas noticias, actualizaciones y perspectivas sobre la industria logística. ¡Mantente al tanto para más publicaciones próximamente!
                    </p>
                </div>
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Buscar en el blog"
                        className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {currentItems.map((item, index) => (
                        <FletCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            moreInfo={item.moreInfo}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 bg-gray-300 rounded-lg disabled:opacity-50"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 bg-gray-300 rounded-lg disabled:opacity-50"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
            <FletFooter />
        </section>
    );
}
