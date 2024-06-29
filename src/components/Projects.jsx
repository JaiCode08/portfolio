import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=' pt-14 md:min-h-screen' id='Projects'>
      <div className='text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl  sticky top-0 w-full bg-white/100 py-2'>
        //Projects
      </div>
      <ProjectCard />
      <footer className="bottom-0 text-center text-sm flex justify-center w-full">
        <span className="mb-3">
          © {year} Copyright Jainish H. Patel. Powered by Aaditya Panchal's <a href="https://github.com/aadityapanchal7/portfolio-v1">theme</a> with modifications.
        </span>
      </footer>
    </div>

  )
}

export default Projects
