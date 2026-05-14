'use client'

import { skills } from '@/constants'
import { motion, useReducedMotion } from 'framer-motion'
import { viewport } from '@/constants/animations'
import Image from 'next/image'

const iconVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9, rotate: -8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.4, ease: 'backOut' },
  },
} as const

const groupVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
} as const

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()
  const revealProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden', whileInView: 'show', viewport }

  return (
    <section id='skills' className='relative px-4 py-24 sm:px-6 lg:px-12'>
      <div className='absolute left-0 right-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(31,227,242,0.17),transparent)]' />
      <div className='mx-auto max-w-[1100px]'>
        <div className='mb-[54px]'>
          <div className='mb-[11px] text-[10px] uppercase tracking-[5px] text-(--brand-cyan)'>
            {'//'} 03 — WHAT I USE
          </div>
          <h2 className='font-display text-[36px] font-extrabold tracking-[0.18em] text-(--brand-cream)'>
            Skills
          </h2>
          <p className='mt-3 text-[15px] leading-[1.7] text-(--text-muted)'>
            Technologies and tools I work with daily.
          </p>
        </div>

        <div className='flex flex-col gap-10'>
          {skills.map(group => (
            <div key={group.category} className='flex flex-col gap-3.5'>
              <motion.p
                className='mb-1 font-display text-[11px] uppercase tracking-[0.3em] text-(--brand-cyan)'
                initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                }
                viewport={viewport}
                transition={{ duration: 0.4 }}
              >
                {group.category}
              </motion.p>

              <motion.div
                className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6'
                variants={shouldReduceMotion ? undefined : groupVariant}
                {...revealProps}
              >
                {group.items.map(item => (
                  <motion.div
                    key={item.name}
                    className='flex flex-col items-center gap-3 rounded-md border border-[rgba(31,227,242,0.18)] bg-[rgba(8,15,23,0.65)] px-3 py-4 text-center transition'
                    variants={shouldReduceMotion ? undefined : iconVariant}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.12,
                            y: -6,
                            borderColor: item.color,
                            boxShadow: `0 0 20px ${item.color}44, 0 8px 24px rgba(0,0,0,0.3)`,
                            transition: { duration: 0.2 },
                          }
                    }
                  >
                    <motion.span
                      className='flex h-9 w-9 items-center justify-center'
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { rotate: [0, -8, 8, 0] }
                      }
                      transition={{ duration: 0.4 }}
                    >
                      {typeof item.icon === 'string' ? (
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={35}
                          height={35}
                          className='object-contain'
                        />
                      ) : (
                        <item.icon />
                      )}
                    </motion.span>
                    <span className='text-[11px] uppercase tracking-[0.2em] text-(--text-main) opacity-80'>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
