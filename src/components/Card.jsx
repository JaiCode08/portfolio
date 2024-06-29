import React from 'react';
import { Experience } from '../utils/Exp-Card';

function Card() {
  return (
    <>
      {Experience.map((info, index) => (
        <div key={index} className='mt-5 md:w-120 w-full'> {/* Adjust width for mobile */}
          <div className="flex flex-row items-start gap-4 px-4 transition-all duration-500 rounded-lg shadow-xl cursor-pointer hover:translate-y-2 bg-white border-2 border-neutral-200 p-4">
            <img className="rounded-full stroke-purple-300 shrink-0 md:w-20 md:h-20" src={info.image} alt={info.alt} width={info.width} />
            <div className="flex flex-col flex-grow">
              <span className="font-bold text-xl">{info.Title}</span>
              <p className="text-xs text-gray-400 mb-1">
                {info.Role} {info.Date}
              </p>
              <p className="text-sm leading-relaxed text-gray-900">
                {info.Description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
