import React from 'react';
import { fletData } from '../data';

export function FletCard({ image, title, description, moreInfo }) {
    return (
        <div className="bg-white bg-gray-500 shadow-lg shadow-gray-500/50 rounded-lg p-6 w-72 ">
            <div className="flex  mb-4">
                <img src={image} alt={title} className="h-20" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
            <p className="text-gray-700 text-sm text-justify mb-6">
                {description}
            </p>
            <div className="text-start">
                <a href="#" className="text-gray-800 text-sm font-medium hover:underline">{moreInfo}</a>
            </div>
        </div>
    );
}

export function FletCards() {
    return (
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
    );
}