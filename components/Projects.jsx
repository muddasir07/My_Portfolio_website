import React from 'react'
import Image from 'next/image';
import portfolioImg from '../public/projects/blogging.png'
import budgetImg from '../public/projects/page.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-8 py-10 pt-0'>
            <p className='text-xl tracking-widest uppercase text-white'>Projects</p>
            <h2 className='py-4 text-[#5651e5]'>What I've Build</h2>
            <div className='grid md:grid-cols-2 gap-8'>

              <ProjectItem title='Portfolio' 
              backgroundImg={portfolioImg} 
              projectUrl='https://muddasir-blogging-site.netlify.app/'
              />
               <ProjectItem title='Budget App' 
              backgroundImg={budgetImg}
              projectUrl='https://muddasir07.github.io/Ecommerce-Website-Landing-Page/'
              />

            </div>


        </div>

    </div>
  )
}

export default Projects
