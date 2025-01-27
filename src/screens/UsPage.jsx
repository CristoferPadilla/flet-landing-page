import { FletHeader } from "../components/FletHeader";
import { FletFooter } from "../components/FletFooter";


export default function UsPage() {

    return (
        <section className="text-gray-600 body-font min-h-screen flex flex-col">
           <FletHeader /> 
           <FletFooter />
        </section>
    );
}