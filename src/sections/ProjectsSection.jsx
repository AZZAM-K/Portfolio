import { projects } from '../constants'
import { Link } from 'react-router'
import ProjectCard from '../components/ProjectCard'

const ProjectsSection = () => {
  const topProjects = projects.slice(0, 3)

  return (
    <>
      <div className='flex justify-between'>
        <h2
          className='font-bold text-white text-3xl relative inline-block before:content-["#"] before:text-red-400 
        after:content-[""] after:block after:w-[10vw] after:h-px after:bg-red-400 after:absolute after:transform 
        after:translate-x-full after:-translate-y-1/2 after:right-[-16px] after:top-1/2'
        >
          projects
        </h2>
        <Link
          to={'/projects'}
          className='text-white hover:text-red-400 underline text-lg'
        >
          View all ~~&gt;
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
        {topProjects.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection
