'use client'

import { GithubIcon, LinkedinIcon } from '@/components/Icons'
import { Mail, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { container, fadeUp, scaleIn, viewport } from '@/constants/animations'

const CONTACT_ITEMS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'azzam.kahil.dev@gmail.com',
    href: 'mailto:azzam.kahil.dev@gmail.com',
    color: '#00f5ff',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+961 76 338 952',
    href: 'https://wa.me/96176338952',
    color: '#00b4ff',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Tripoli, Lebanon',
    href: undefined,
    color: '#0080ff',
  },
]

const SOCIALS = [
  {
    Icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/AZZAM-K',
    color: '#e8f4ff',
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'http://linkedin.com/in/azzam-al-kahil',
    color: '#0A66C2',
  },
]

const Contact = () => {
  const shouldReduceMotion = useReducedMotion()
  const revealProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible', viewport }

  return (
    <section
      id='contact'
      className='relative px-4 pb-[110px] pt-24 sm:px-6 lg:px-12'
    >
      <div className='absolute left-0 right-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(31,227,242,0.17),transparent)]' />
      <div className='mx-auto max-w-[1100px]'>
        <div className='mx-auto max-w-[680px] text-center'>
          <div className='mb-[11px] text-[10px] uppercase tracking-[5px] text-(--brand-cyan)'>
            {'//'} 05 — REACH OUT
          </div>
          <h2 className='font-display text-[36px] font-extrabold tracking-[0.18em] text-(--brand-cream)'>
            Contact
          </h2>

          <motion.p
            className='mt-6 text-[15.5px] leading-[1.85] text-(--text-muted)'
            variants={shouldReduceMotion ? undefined : fadeUp}
            {...revealProps}
          >
            I&apos;m always open to new opportunities, interesting
            collaborations, and conversations about challenging problems.
            Don&apos;t hesitate to reach out.
          </motion.p>

          <motion.div
            className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
            variants={shouldReduceMotion ? undefined : container}
            {...revealProps}
          >
            {CONTACT_ITEMS.map(({ Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                className='flex flex-col items-center gap-2.5 rounded-lg border border-[rgba(0,180,255,0.14)] bg-[rgba(8,15,23,0.78)] px-5 py-7 text-center backdrop-blur-[20px]'
                variants={shouldReduceMotion ? undefined : scaleIn}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        borderColor: color,
                        boxShadow: `0 0 24px ${color}33`,
                      }
                }
                transition={{ duration: 0.22 }}
              >
                <span
                  className='flex h-12 w-12 items-center justify-center rounded-full border border-(--border-strong) bg-black/60'
                  style={{ color }}
                >
                  <Icon className='h-6 w-6' />
                </span>
                <span className='text-[10px] uppercase tracking-[0.24em] text-(--text-muted)'>
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    className='text-sm font-semibold text-(--brand-cream)'
                    style={{ color }}
                  >
                    {value}
                  </a>
                ) : (
                  <span className='text-sm font-semibold text-(--brand-cream)'>
                    {value}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className='mt-10 flex flex-wrap items-center justify-center gap-6'
            variants={shouldReduceMotion ? undefined : container}
            {...revealProps}
          >
            {SOCIALS.map(({ Icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                className='flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-[rgba(180,210,240,0.45)]'
                variants={shouldReduceMotion ? undefined : scaleIn}
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.15, color }
                }
                title={label}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon className='h-5 w-5' />
                <span>{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
