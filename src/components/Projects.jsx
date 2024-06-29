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
          © {year} Copyright 2024 Jainish H. Patel. Powered by Aaditya Panchal's theme. Hosted by GitHub Pages.
        </span>
      </footer>
    </div>

  )
}

export default Projects
