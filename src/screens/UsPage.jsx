import { FletHeader } from "../components/FletHeader";
import { FletFooter } from "../components/FletFooter";

export default function UsPage() {
    return (
        <section className="text-gray-600 body-font min-h-screen flex flex-col">
            <FletHeader />
            <div className="flex-grow container mx-auto px-5 py-24">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Sobre Nosotros</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                        En Flet, somos una fleteria dedicada a proporcionar soluciones innovadoras para la gestión de proyectos. Nuestro equipo está compuesto por expertos en tecnología y gestión que trabajan juntos para ofrecer las mejores herramientas a nuestros clientes.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <h2 className="text-lg font-medium title-font mb-2">Nuestra Misión</h2>
                            <p className="leading-relaxed text-base mb-4">
                                En Flet, nuestra misión es proporcionar soluciones innovadoras para la gestión de proyectos, ayudando a nuestros clientes a optimizar sus procesos y alcanzar sus objetivos con mayor eficiencia.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <h2 className="text-lg font-medium title-font mb-2">Nuestro Equipo</h2>
                            <p className="leading-relaxed text-base mb-4">
                                Nuestro equipo está compuesto por expertos en tecnología y gestión, comprometidos con la innovación y la excelencia. Trabajamos juntos para ofrecer las mejores herramientas a nuestros clientes, asegurando soluciones completas y efectivas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FletFooter />
        </section>
    );
}
