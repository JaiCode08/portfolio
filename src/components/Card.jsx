import React from 'react';
import { Experience } from '../utils/Exp-Card'; // Assuming Experience is an array of objects

function Card() {
  return (
    <>
      {Experience.map((info, index) => (
        <div key={index} className='mt-5 px-4'>
          <div className="flex flex-row items-start gap-4 transition-all duration-500 rounded-lg shadow-xl cursor-pointer hover:translate-y-2 md:w-96 w-72 bg-neutral-50 py-4 px-6 justify-between">
            <img className="rounded-full stroke-purple-300 shrink-0" src={info.image} alt={info.alt} width={info.width} />
            <div className="flex flex-col flex-grow">
              <span className="font-bold">{info.Title}</span>
              <p className="text-xs" style={{ color: '#555' }}>
                {info.Role} {info.Date}
              </p>
              <p className='text-sm leading-relaxed' style={{ color: '#333' }}>
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
