import React from 'react';

function About() {
  const milliseconds = new Date().getTime() - new Date("04/01/2008").getTime();
  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className='text-black lg:pb-20' id='About'>
      <div className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl sticky top-0 w-full bg-white/90 py-2'>
        //About
      </div>
      <div className=' font-thin text-lg md:text-xl xl:text-2xl leading-relaxed space-y-5 mt-5'>
        <p>
          Hello I'm Jainish, a {age} year old programmer looking to open access to knowledge to underprivileged communities. My academic focus is expanding the implementation scope of prediction models in diverse areas such as the oceans, the vast universe, and the complex human mind. I’m always exploring un-reached frontiers through perseverance. I aim to innovate, share, and grow the community around me and make tangible contributions to the world.
        </p>
        <p>
          My other interests include <b>astrophotography</b> and <b>watching F1</b>.
        </p>
      </div>
    </div>
  );
}

export default About;