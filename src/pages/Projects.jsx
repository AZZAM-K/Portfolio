import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { projects } from '../constants'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <>
      <Navbar />
      <main className='px-5 lg:px-25 mt-40'>
        <h1 className='text-4xl font-bold text-white before:content-["/"] before:text-red-400 before:mr-1'>
          projects
        </h1>
        <p className='text-gray-400 mt-5 text-lg'>All of my projects</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
          {projects.map((p, index) => (
            <ProjectCard key={index} project={p} />
          ))}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Projects
