const ProjectCard = ({ project }) => {
  return (
    <div className='border border-gray-400' data-aos='flip-right'>
      <img
        src={project.img}
        className='border-b border-gray-400 aspect-video'
      />
      <ul className='flex flex-wrap list-none gap-x-4 gap-y-2 text-gray-400 p-2 border-b border-gray-400 text-lg'>
        {project.techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className='p-4'>
        <p className='text-2xl text-white font-bold'>{project.title}</p>
        <p className='text-lg text-gray-400 my-4 mx-0'>{project.desc}</p>
        <div className='flex flex-wrap gap-2'>
          <a
            className='border py-2 px-4 text-white text-lg border-red-400 inline-block w-fit font-bold hover:text-red-400'
            href={project.liveLink}
          >
            Live =&gt;
          </a>
          <a
            className='border py-2 px-4 text-white text-lg border-red-400 inline-block w-fit font-bold hover:text-red-400'
            href={project.githubLink}
          >
            Github =&gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
