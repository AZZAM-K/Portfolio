'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '10+', label: 'Projects' },
  { value: '1+', label: 'Years Exp' },
  { value: '20+', label: 'Technologies' },
]

const PROFILE_ROWS = [
  { key: 'name', value: '"Azzam Al Kahil"' },
  { key: 'role', value: '"Full Stack Developer"' },
  { key: 'location', value: '"Tripoli, Lebanon"' },
  { key: 'focus', value: '["Web Apps", "Mobile Apps", "APIs"]' },
  { key: 'status', value: '"Open to opportunities"' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const

const containerSlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
} as const

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const

const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const

const slideRight = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const

const viewport = { once: true, amount: 0.35 }

const About = () => {
  return (
    <section id='about' className='relative py-24'>
      <div className='absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(0,180,255,0.17),transparent)]' />
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <p className='text-[10px] uppercase tracking-[0.5em] text-[rgba(0,245,255,0.58)]'>
            {'//'} 01 — WHO AM I
          </p>
          <h2 className='mt-3 text-3xl font-semibold text-(--text-main) sm:text-4xl font-display'>
            About <span className='text-(--brand-cyan)'>Me</span>
          </h2>
          <p className='mt-3 text-sm text-[rgba(180,210,240,0.58)] max-w-2xl'>
            A brief profile summary, system priorities, and delivery focus.
          </p>
        </div>

        <div className='grid gap-10 lg:grid-cols-2'>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
          >
            <motion.div
              className='text-[rgba(180,210,240,0.72)] space-y-5'
              variants={slideLeft}
            >
              <p>
                I build web and mobile apps with a focus on performance,
                scalability, and intuitive user experiences. I bridge the gap
                between robust backend systems and polished interfaces.
              </p>
              <p>
                With deep expertise across the stack, I build products that are
                as solid under the hood as they are compelling on the surface.
                Every line of code is written with purpose.
              </p>
            </motion.div>

            <motion.div
              className='mt-10 grid grid-cols-2 gap-4'
              variants={containerSlow}
            >
              {STATS.map(({ value, label }) => (
                <motion.div
                  key={label}
                  className='rounded-md border border-[rgba(0,180,255,0.12)] bg-[rgba(0,180,255,0.04)] px-5 py-4'
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.04,
                    borderColor: 'rgba(0,245,255,0.4)',
                  }}
                >
                  <div className='font-display text-2xl text-(--brand-cyan) drop-shadow-[0_0_18px_rgba(0,245,255,0.38)]'>
                    {value}
                  </div>
                  <div className='mt-1 text-[11px] uppercase tracking-[0.22em] text-[rgba(140,180,210,0.45)]'>
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className='rounded-lg border border-[rgba(0,180,255,0.14)] bg-[rgba(6,12,20,0.88)] p-7 backdrop-blur'
            variants={slideRight}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
          >
            <p className='text-[11px] text-[rgba(0,245,255,0.48)] mb-6'>
              <span className='text-[rgba(0,245,255,0.3)]'>~/azzam_k</span> $
              cat profile.json
            </p>
            <motion.div
              variants={containerSlow}
              initial='hidden'
              whileInView='show'
              viewport={viewport}
            >
              <motion.div
                className='text-sm leading-7 text-[rgba(200,225,255,0.88)]'
                variants={fadeUp}
              >
                {'{'}
              </motion.div>
              {PROFILE_ROWS.map(({ key, value }) => (
                <motion.div
                  key={key}
                  className='text-sm leading-7 text-[rgba(200,225,255,0.88)] pl-4'
                  variants={fadeUp}
                >
                  <span className='text-[rgba(0,245,255,0.62)]'>
                    &quot;{key}&quot;
                  </span>
                  <span className='text-[rgba(180,210,240,0.38)]'>: </span>
                  <span>{value}</span>
                </motion.div>
              ))}
              <motion.div
                className='text-sm leading-7 text-[rgba(200,225,255,0.88)]'
                variants={fadeUp}
              >
                {'}'}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
