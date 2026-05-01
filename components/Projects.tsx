'use client'

import { projects } from '@/constants'
import { motion, useReducedMotion } from 'framer-motion'
import { container, fadeUp, viewport } from '@/constants/animations'
import ProjectCard from '@/components/PorjectCard'

const Projects = () => {
  const shouldReduceMotion = useReducedMotion()
  const revealProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible', viewport }

  return (
    <section id='projects' className='relative px-4 py-24 sm:px-6 lg:px-12'>
      <div className='absolute left-0 right-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(31,227,242,0.17),transparent)]' />
      <div className='mx-auto max-w-[1100px]'>
        <div className='mb-[54px]'>
          <div className='mb-[11px] text-[10px] uppercase tracking-[5px] text-(--brand-cyan)'>
            {'//'} 04 — WHAT I BUILD
          </div>
          <h2 className='font-display text-[36px] font-extrabold tracking-[0.18em] text-(--brand-cream)'>
            Projects
          </h2>
          <p className='mt-3 text-[15px] leading-[1.7] text-(--text-muted)'>
            A selection of systems and interfaces I&apos;ve shipped.
          </p>
        </div>

        <motion.div
          className='grid gap-5 md:grid-cols-2'
          variants={shouldReduceMotion ? undefined : container}
          {...revealProps}
        >
          {projects.map(project => (
            <motion.div
              key={project.title}
              variants={shouldReduceMotion ? undefined : fadeUp}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
