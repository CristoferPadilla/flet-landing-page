import React from 'react';
import { Link } from 'react-router-dom';

export function FletCard({ image, title, description, moreInfo }) {
    return (
        <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 w-72 ">
            <div className="flex  mb-4">
                <img src={image} alt={title} className="h-20" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
            <p className="text-gray-700 text-sm text-justify mb-6">
                {description}
            </p>
            <div className="text-start">
              <Link to= '/service' className="text-blue-500 hover:text-blue-700 text-sm">{moreInfo}</Link>
            </div>
        </div>
    );
}


