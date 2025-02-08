import { FletHeader } from '../components/FletHeader';
import { FletFooter } from "../components/FletFooter";

export default function ServicePage() {
    return (
    <section className="text-gray-600 body-font min-h-screen flex flex-col">
        <FletHeader />
        <div className="flex-grow">
            <div className="container mx-auto py-24">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Nuestros Servicios de Fletes</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <h2 className="text-lg font-medium title-font mb-4 text-gray-900">Servicio de Carga Completa</h2>
                            <p className="leading-relaxed mb-6">Ofrecemos servicios de carga completa para grandes envíos, asegurando la entrega segura y puntual de sus mercancías.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <h2 className="text-lg font-medium title-font mb-4 text-gray-900">Servicio de Carga Parcial</h2>
                            <p className="leading-relaxed mb-6">Ideal para envíos más pequeños, nuestro servicio de carga parcial le permite compartir el espacio del camión con otros clientes.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <h2 className="text-lg font-medium title-font mb-4 text-gray-900">Servicio de Transporte Exprés</h2>
                            <p className="leading-relaxed mb-6">Para envíos urgentes, nuestro servicio de transporte exprés garantiza la entrega rápida y eficiente de sus productos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FletFooter />
    </section>
    )
}