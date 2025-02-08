import { React } from "react";
import { FletHeader } from "../components/FletHeader";
import { FletFooter } from "../components/FletFooter";
import { FletCard } from "../components/FletCards";
import { fletData, fletHeroData } from "../data";
import { FletHero } from "../components/FletHero";
import { Link } from 'react-router-dom';

export default function HomePage() {



  return (
    <section className="text-gray-600 body-font min-h-screen flex flex-col bg-white-200"> 
      <FletHeader />
      <article className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center flex-grow">
        <div className="lg:w-full flex flex-wrap sm:pr-10 pr-0 items-center justify-center flex-grow">
          <div className="flex flex-col text-center justify-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-2 text-black">
              Innovando soluciones tecnológicas en logística
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Nos especializamos en soluciones eficientes e integrales innovando
              para transportar lo que necesites.
            </p>
            <div className="flex justify-center mt-6 flex-wrap">
              <button className="inline-flex shadow-lg shadow-gray-500/50 border-0 bg-white p-1.5 mr-2 mb-2 focus:outline-none hover:bg-black hover:text-white cursor-pointer rounded-4xl text-sm">
                Inicio de sesión
              </button>
              <button className="inline-flex text-black border-1 bg-white p-1.5 mr-2 mb-2 focus:outline-none hover:bg-black hover:text-white cursor-pointer rounded-4xl text-sm">
               <Link to='/us' >
               Conócenos
               </Link>
              </button>
            </div>
            <div className="flex justify-center mt-6">
              <img src="./flet-menu.png" alt="image flet" className="w-full sm:w-1/2" />
            </div>
          </div>
        </div>
      </article>
      <article className="container mx-auto flex flex-wrap p-5 flex-col items-center justify-center flex-grow">
        <h1 className="sm:text-2xl text-3xl font-medium title-font mb-2 text-black">
          Nos respaldan años de experiencia
        </h1>
       <div className="flex flex-wrap justify-center gap-4">
                   {fletData.map((item, index) => (
                       <FletCard
                           key={index}
                           image={item.image}
                           title={item.title}
                           description={item.description}
                           moreInfo={item.moreInfo}
                       />
                   ))}
               </div>
      </article>
      <section className="container mx-auto flex flex-wrap p-5 flex-col items-center flex-grow">
          <div>
                    {fletHeroData.map((hero, index) => (
                        <FletHero
                            key={index}
                            title={hero.title}
                            description={hero.description}
                            image={hero.image}
                            buttons={hero.buttons}
                            imageFirst={hero.imageFirst} 
                            link={hero.link}
                        />
                    ))}
                </div>
      </section>
      <FletFooter />
    </section>
  );
}
