import { FletHeader } from "../components/FletHeader";
import { FletFooter } from "../components/FletFooter";

export default function PricesPage() {
    return (
        <section className="text-gray-600 body-font min-h-screen flex flex-col bg-gray-100">
            <FletHeader />
            <article className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center flex-grow">
                <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-6 text-center text-black-600">Precios</h1>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Suscripción para clientes:</h2>
                        <ul className="list-disc list-inside mb-4 text-lg">
                            <li>Asignación rápida de transportista</li>
                            <li>Descuento del 5% en su servicio</li>
                            <li>Soporte 24/7</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Costo:</h2>
                        <ul className="list-disc list-inside mb-4 text-lg">
                            <li>$50 mensual</li>
                            <li>$600 anual</li>
                        </ul>
                    </div>
                    <p className="italic text-lg text-center">*Sujeto a validación</p>
                    <p className="italic text-lg text-center">(Para empresas)</p>
                </div>
            </article>
            <FletFooter />
        </section>
    );
}