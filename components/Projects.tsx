import { GithubIcon } from '@/components/Icons'
import { projects } from '@/constants'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className='projects bg-black text-white py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-16'>
          <span className='bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent'>
            My Projects
          </span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gray-900 rounded-xl border-2 border-gray-800 transition-all duration-300 transform
               hover:-translate-y-2 flex flex-col overflow-hidden group hover:border-red-600 hover:shadow-xl hover:shadow-red-900/20'
            >
              <div className='relative w-full h-48 overflow-hidden'>
                <Image
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300'></div>
              </div>
              <div className='p-6 flex flex-col grow'>
                <div className='grow'>
                  <h3 className='text-2xl font-bold text-gray-100 mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 mb-4 text-sm'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.techs.map((tech, i) => (
                      <span
                        key={i}
                        className='bg-gray-800 text-red-400 text-xs font-medium px-2.5 py-1 rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='mt-auto pt-4 border-t border-gray-700/50 flex justify-end space-x-4'>
                  <Link
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-red-500 transition-colors duration-200 transform hover:scale-110'
                    title='GitHub Repository'
                  >
                    <GithubIcon className='w-6 h-6' />
                  </Link>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-red-500 transition-colors duration-200 transform hover:scale-110'
                    title='Live Demo'
                  >
                    <ExternalLink className='w-6 h-6' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
