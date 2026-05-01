'use client'

import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

const ProjectCard = ({
  project,
}: {
  project: {
    img: StaticImageData
    title: string
    description: string
    techs: string[]
    liveLink: string
    githubLink: string
  }
}) => (
  <motion.article
    className='group relative flex h-full flex-col overflow-hidden rounded-md border border-[rgba(0,180,255,0.12)] bg-[rgba(8,15,23,0.72)] backdrop-blur-[20px] transition hover:border-[rgba(0,245,255,0.36)] hover:bg-[rgba(0,180,255,0.06)] hover:shadow-[0 0 30px rgba(0,180,255,0.09), 0 8px 30px rgba(0,0,0,0.28)]'
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25 }}
  >
    <div className='absolute left-0 right-0 top-0 z-3 h-0.5 bg-[linear-gradient(to_right,transparent,var(--brand-cyan),transparent)] opacity-0 shadow-[0_0_10px_rgba(31,227,242,0.6)] transition group-hover:opacity-100' />

    <div className='relative h-[180px] w-full overflow-hidden shrink-0'>
      <Image
        src={project.img}
        alt={project.title}
        className='h-full w-full object-cover object-center block transition duration-500 ease-out saturate-[0.7] brightness-[0.85] group-hover:scale-[1.05] group-hover:saturate-[0.9] group-hover:brightness-[1.1]'
      />
      {/* <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,10,20,0.18),rgba(31,227,242,0.07),rgba(5,10,15,0.85))]' /> */}
    </div>

    <div className='flex flex-1 flex-col p-5'>
      <h3 className='mb-2 text-[17px] font-semibold text-(--text-main)'>
        {project.title}
      </h3>
      <p className='mb-4 text-[13px] leading-[1.75] text-(--text-muted)'>
        {project.description}
      </p>

      <div className='mb-4 flex flex-wrap gap-2'>
        {project.techs.map(tag => (
          <span
            key={tag}
            className='rounded-sm border border-[rgba(0,128,255,0.2)] bg-[rgba(0,128,255,0.07)] px-2 py-1 font-(--font-ui) text-[10px] uppercase tracking-[1.5px] text-[rgba(140,190,240,0.8)]'
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='mt-auto flex items-center gap-4 translate-y-1.25 opacity-0 transition duration-[0.25s] group-hover:translate-y-0 group-hover:opacity-100'>
        <Link
          href={project.liveLink ?? '#'}
          className='text-[11px] uppercase tracking-[2px] text-(--brand-cyan) font-bold'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Project →
        </Link>
        <Link
          href={project.githubLink ?? '#'}
          className='font-(--font-ui) text-[11px] uppercase tracking-[2px] text-[rgba(180,210,240,0.45)]'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub ↗
        </Link>
      </div>
    </div>
  </motion.article>
)

export default ProjectCard
