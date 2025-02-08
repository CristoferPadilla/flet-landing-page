import { FletHeader } from '../components/FletHeader';
import { FletFooter } from "../components/FletFooter";
import { useState } from 'react';

export default function ContactPage() {
    return (
        <section className="text-gray-600 body-font min-h-screen flex flex-col">
            <FletHeader />
            <div className="flex-grow container mx-auto px-5 py-24">
                <div className="text-left mb-20">
                    <h1 className=" text-left sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Contáctanos</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500">
                        Estamos aquí para ayudarte. Envíanos tus preguntas, comentarios y sugerencias, y nos pondremos en contacto contigo lo antes posible.
                    </p>
                </div>
                <article className='flex flex-row justify-between'>
                <ContactForm />
                <img src="./flet-menu.png" className='w-1/2' alt="" />

                </article>
            </div>
            <FletFooter />
        </section>
    );
}

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-10 p-5 rounded-lg shadow-lg bg-gray-50">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="5"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
}
