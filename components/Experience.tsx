'use client'

import { experienceData } from '@/constants'
import { motion, useReducedMotion } from 'framer-motion'
import {
  container,
  fadeUp,
  slideLeft,
  slideRight,
  viewport,
} from '@/constants/animations'

const Experience = () => {
  const shouldReduceMotion = useReducedMotion()
  const revealProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible', viewport }

  return (
    <section id='experience' className='relative px-4 py-24 sm:px-6 lg:px-12'>
      <div className='absolute left-0 right-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(0,180,255,0.17),transparent)]' />
      <div className='mx-auto max-w-[1100px]'>
        <div className='mb-[54px]'>
          <div className='mb-[11px] text-[10px] uppercase tracking-[5px] text-(--brand-cyan)'>
            {'//'} 02 — WHERE I&apos;VE WORKED
          </div>
          <h2 className='font-display text-3xl md:text-[36px] font-extrabold tracking-[0.18em] text-(--brand-cream)'>
            Experience
          </h2>
          <p className='mt-3 text-[15px] leading-[1.7] text-(--text-muted)'>
            The roles and teams that shaped me as an engineer.
          </p>
        </div>

        <div className='relative flex flex-col gap-7'>
          <div
            className='absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2
           bg-[linear-gradient(to_bottom,transparent,rgba(31,227,242,0.35),transparent)] max-[900px]:left-3 max-[900px]:translate-x-0'
          />

          {experienceData.map((job, index) => {
            const isLeft = index % 2 === 0
            const slideVariant = isLeft ? slideLeft : slideRight

            return (
              <motion.div
                key={`${job.company}-${job.role}`}
                className={`relative flex ${
                  isLeft
                    ? 'justify-start pr-[calc(50%+24px)]'
                    : 'justify-end pl-[calc(50%+24px)]'
                } max-[900px]:justify-start max-[900px]:pl-8 max-[900px]:pr-0`}
                variants={shouldReduceMotion ? undefined : slideVariant}
                {...revealProps}
              >
                <motion.div
                  className='absolute left-1/2 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-(--brand-cyan)
                   shadow-[0_0_10px_rgba(31,227,242,0.7),0_0_20px_rgba(31,227,242,0.3)] max-[900px]:left-2 max-[900px]:translate-x-0'
                  initial={shouldReduceMotion ? false : { scale: 0 }}
                  whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, delay: 0.2, ease: 'backOut' }}
                />

                <motion.div
                  className='relative w-full max-w-[540px] rounded-lg border border-(--border-soft)
                   bg-[rgba(8,15,23,0.78)] px-[26px] pb-[26px] pt-6 backdrop-blur-[20px]'
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -3, borderColor: 'rgba(31,227,242,0.45)' }
                  }
                  transition={{ duration: 0.22 }}
                >
                  <div
                    className='absolute left-0 right-0 top-0 h-0.5
                   bg-[linear-gradient(to_right,transparent,var(--brand-cyan),transparent)] shadow-[0_0_12px_rgba(31,227,242,0.45)]'
                  />

                  <div className='flex items-start justify-between gap-4 max-[900px]:flex-col max-[900px]:items-start'>
                    <div>
                      <h3 className='mb-1 text-[17px] font-semibold text-(--text-main)'>
                        {job.role}
                      </h3>
                      <p className='text-[15px] font-bold uppercase tracking-[0.24em] text-(--brand-cyan)'>
                        {job.company}
                      </p>
                    </div>
                    <div
                      className='flex flex-col items-end gap-1 font-(--font-mono) text-[10px]
                     uppercase tracking-[0.22em] text-(--text-muted) max-[900px]:items-start'
                    >
                      <span className='text-(--brand-cyan)'>{job.date}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <p className='mt-3.5 text-[13.5px] leading-[1.7] text-(--text-muted)'>
                    {job.description}
                  </p>

                  {job.highlights?.length ? (
                    <motion.ul
                      className='mt-4 grid list-none gap-2.5 p-0'
                      variants={shouldReduceMotion ? undefined : container}
                      {...revealProps}
                    >
                      {job.highlights.map(highlight => (
                        <motion.li
                          key={highlight}
                          className='grid grid-cols-[12px_1fr] gap-2.5 text-[13px] leading-[1.65] text-(--text-main) opacity-80'
                          variants={shouldReduceMotion ? undefined : fadeUp}
                        >
                          <span className='mt-1.5 h-1.5 w-1.5 rounded-full bg-(--brand-cyan) shadow-[0_0_8px_rgba(31,227,242,0.6)]' />
                          {highlight}
                        </motion.li>
                      ))}
                    </motion.ul>
                  ) : null}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
