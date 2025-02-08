import {Link} from 'react-router-dom';

export function FletHero({ title, description, image, buttons, imageFirst, link }) {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:py-20 m-10">
            {imageFirst && (
                <div className="lg:w-1/3 mb-8 lg:mb-0 mr-5">
                    <img
                        src={image}
                        alt="Workshop"
                        className="w-full object-cover h-96 lg:h-auto lg:max-w-full"
                    />
                </div>
            )}
            <div className={`lg:w-1/2 lg:pr-10 ${imageFirst ? 'lg:order-last' : ''}`}>
                <h1 className="sm:text-3xl text-3xl font-bold text-gray-900 mb-4 text-start leading-tight">
                    {title}
                </h1>
                <p className="text-gray-700 mb-8 leading-relaxed text-justify lb:text-left">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    {buttons.map((button, index) => (
                        <Link to={link}>
                        <button
                            key={index}
                            className={`${
                                button.type === 'primary'
                                    ? 'inline-flex shadow-lg shadow-gray-500/50 bg-white p-1.5 mr-2 focus:outline-none hover:bg-black hover:text-white cursor-pointer rounded-4xl text-sm'
                                    : 'inline-flex text-black border-1 bg-white p-1.5 mr-2 focus:outline-none hover:bg-black hover:text-white cursor-pointer rounded-4xl text-sm'
                            } font-medium px-6 py-3 rounded`}
                        >
                            {button.text}
                        </button>
                        </Link>
                    ))}
                </div>
            </div>
            {!imageFirst && (
                <div className="lg:w-1/3">
                    <img
                        src={image}
                        alt="Workshop"
                        className="w-full object-cover h-96 lg:h-auto lg:max-w-full"
                    />
                </div>
            )}
        </div>
    );
}