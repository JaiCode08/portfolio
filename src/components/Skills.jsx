import React from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";
import { Languages, Frameworks, Tools } from '../utils/Skillset';

function Skills() {
  return (
    <div className='pt-8 md:pt-0 lg:pb-16' id='Skills'>

      <div className='text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl sticky top-0 w-full bg-white/90 py-2'>
        //Skills
      </div>

      {/* Languages */}
      <div className='md:mt-16 mt-8'>
        <div className='flex items-center'>
          <IoChevronForwardOutline />
          <div className='font-bold text-yellow-600'>
            Languages
          </div>
        </div>

        <div className='flex flex-wrap'>
          {Languages.map((Lang, index) => (
            <div className='py-1 px-3 bg-white border-2 rounded-xl m-1 flex items-center h-8 shadow-md text-sm md:text-base' key={index}>
              {Lang.Language}
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className='mt-14'>
        <div className='flex items-center'>
          <IoChevronForwardOutline />
          <div className='font-bold text-yellow-600'>
            Frameworks
          </div>
        </div>

        <div className='flex flex-wrap mt-2'>
          {Frameworks.map((Frame, index) => (
            <div className='py-1 px-3 bg-white border-2 rounded-xl m-1 flex items-center h-8 shadow-md text-sm md:text-base' key={index}>
              {Frame.Framework}
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className='mt-14'>
        <div className='flex items-center'>
          <IoChevronForwardOutline />
          <div className='font-bold text-yellow-600'>
            Tools / Platforms
          </div>
        </div>

        <div className='flex flex-wrap mt-2'>
          {Tools.map((Tool, index) => (
            <div className='py-1 px-3 bg-white border-2 rounded-xl m-1 flex items-center h-8 shadow-md text-sm md:text-base' key={index}>
              {Tool.Tool}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Skills;
