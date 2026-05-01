'use client'

import TypedTagline from '@/components/TypedTagline'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden pb-20 pt-28'>
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 opacity-70'
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 180, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 180, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 35%, transparent 100%)',
          }}
        />
        <div
          className='absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full
         bg-[radial-gradient(circle,rgba(0,180,255,0.08)_0%,transparent_70%)]'
        />
        <div className='absolute left-4 top-16 h-9 w-9 border-l-2 border-t-2 border-[rgba(0,245,255,0.38)] sm:left-8 sm:top-20 lg:left-12' />
        <div className='absolute right-4 top-16 h-9 w-9 border-r-2 border-t-2 border-[rgba(0,245,255,0.38)] sm:right-8 sm:top-20 lg:right-12' />
        <div className='absolute bottom-10 left-4 h-9 w-9 border-b-2 border-l-2 border-[rgba(0,245,255,0.22)] sm:bottom-14 sm:left-8 lg:left-12' />
        <div className='absolute bottom-10 right-4 h-9 w-9 border-b-2 border-r-2 border-[rgba(0,245,255,0.22)] sm:bottom-14 sm:right-8 lg:right-12' />
      </div>

      <div className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col items-start'>
            <motion.div
              className='mb-8 inline-flex items-center gap-2 rounded-sm border border-[rgba(0,245,255,0.22)]
               bg-[rgba(0,245,255,0.04)] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-(--brand-cyan)'
              custom={0}
              variants={heroItem}
              initial='hidden'
              animate='show'
            >
              <span className='h-2 w-2 rounded-full bg-(--brand-cyan) shadow-[0_0_8px_rgba(0,245,255,0.8)]' />
              Available for work
            </motion.div>
            <motion.h1
              className='mb-6 font-display text-3xl uppercase tracking-[0.45em] text-(--brand-cyan)
               drop-shadow-[0_0_18px_rgba(0,245,255,0.58)] sm:text-4xl'
              custom={0.15}
              variants={heroItem}
              initial='hidden'
              animate='show'
            >
              AZZAM<span className='text-white'>_K</span>
            </motion.h1>
            <motion.p
              className='font-display text-sm uppercase tracking-[0.35em] text-[rgba(0,180,255,0.82)] h-8'
              custom={0.3}
              variants={heroItem}
              initial='hidden'
              animate='show'
            >
              <TypedTagline />
            </motion.p>
            <motion.p
              className='mt-6 max-w-xl text-sm leading-7 text-[rgba(180,210,240,0.62)]'
              custom={0.45}
              variants={heroItem}
              initial='hidden'
              animate='show'
            >
              Crafting high-performance systems and immersive interfaces.
              Turning complex problems into elegant, scalable solutions.
            </motion.p>
            <motion.div
              className='mt-10 flex flex-wrap gap-3'
              custom={0.6}
              variants={heroItem}
              initial='hidden'
              animate='show'
            >
              <motion.a
                href='#projects'
                className='inline-flex items-center justify-center rounded-sm border border-[rgba(0,245,255,0.45)]
                 bg-[rgba(0,245,255,0.08)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-(--brand-cyan) transition-colors
                  duration-200 hover:border-[rgba(0,245,255,0.75)]'
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href='/CV.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center rounded-sm border border-[rgba(180,210,240,0.22)]
                   px-6 py-3 text-xs uppercase tracking-[0.3em] text-[rgba(180,210,240,0.65)] transition-colors duration-200
                    hover:border-[rgba(0,245,255,0.28)] hover:text-(--text-main)'
                >
                  View CV
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className='relative flex items-center justify-center'
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div
              className='absolute h-[260px] w-[260px] rounded-full border border-[rgba(0,245,255,0.22)]
             border-t-[rgba(0,245,255,0.7)] animate-[spin_8s_linear_infinite] sm:h-80 sm:w-[320px] lg:h-[360px] lg:w-[360px]'
            />
            <div
              className='absolute h-[22px] w-[22px] border-l-2 border-t-2
             border-[rgba(0,245,255,0.7)] -translate-x-28 -translate-y-28 sm:-translate-x-36 sm:-translate-y-36 lg:-translate-x-40 lg:-translate-y-40'
            />
            <div
              className='absolute h-[22px] w-[22px] border-r-2 border-t-2
             border-[rgba(0,245,255,0.7)] translate-x-28 -translate-y-28 sm:translate-x-36 sm:-translate-y-36 lg:translate-x-40 lg:-translate-y-40'
            />
            <div
              className='absolute h-[22px] w-[22px] border-l-2 border-b-2
             border-[rgba(0,245,255,0.7)] -translate-x-28 translate-y-28 sm:-translate-x-36 sm:translate-y-36 lg:-translate-x-40 lg:translate-y-40'
            />
            <div
              className='absolute h-[22px] w-[22px] border-r-2 border-b-2
             border-[rgba(0,245,255,0.7)] translate-x-28 translate-y-28 sm:translate-x-36 sm:translate-y-36 lg:translate-x-40 lg:translate-y-40'
            />

            <div className='relative h-60 w-60 overflow-hidden rounded-full border-2 border-[rgba(0,245,255,0.4)] shadow-[0_0_40px_rgba(0,180,255,0.3)] sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px]'>
              <Image
                src='/hero.jpg'
                alt='Developer'
                width={300}
                height={300}
                className='h-full w-full object-cover object-top'
                loading='eager'
              />
              <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(0,30,60,0.5)_0%,rgba(0,180,255,0.12)_50%,rgba(0,10,20,0.45)_100%)] mix-blend-multiply' />
            </div>

            <motion.div
              className='absolute left-0 top-10 hidden sm:flex items-center gap-2 rounded-sm border border-[rgba(0,245,255,0.28)] bg-[rgba(5,10,15,0.88)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[rgba(0,245,255,0.85)]'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className='h-2 w-2 rounded-full bg-(--brand-cyan) shadow-[0_0_6px_var(--brand-cyan)]' />
              10+ Projects
            </motion.div>
            <motion.div
              className='absolute right-0 bottom-8 hidden sm:flex items-center gap-2 rounded-sm border border-[rgba(0,245,255,0.28)] bg-[rgba(5,10,15,0.88)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[rgba(0,245,255,0.85)]'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <span className='h-2 w-2 rounded-full bg-(--brand-cyan) shadow-[0_0_6px_var(--brand-cyan)]' />
              1+ Yrs Exp
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
