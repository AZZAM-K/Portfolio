import { GithubIcon, LinkedinIcon } from '@/components/Icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full py-12'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='panel rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div>
            <a
              href='#home'
              className='font-display text-sm text-(--brand-cyan) tracking-[0.3em]'
            >
              AZZAM<span className='text-white'>_K</span>
            </a>
            <p className='mt-2 text-sm text-(--text-muted)'>
              Fullstack systems. Clean interfaces. Reliable delivery.
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <span className='chip'>2026</span>
            <Link
              href='https://github.com/AZZAM-K'
              target='_blank'
              rel='noopener noreferrer'
              className='text-(--text-muted) hover:text-(--brand-cream) transition-colors'
              title='GitHub'
            >
              <GithubIcon className='w-6 h-6' />
            </Link>
            <Link
              href='http://linkedin.com/in/azzam-al-kahil'
              target='_blank'
              rel='noopener noreferrer'
              className='text-(--text-muted) hover:text-(--brand-cream) transition-colors'
              title='LinkedIn'
            >
              <LinkedinIcon className='w-6 h-6' />
            </Link>
          </div>
        </div>
        <p className='mt-6 text-center text-xs uppercase tracking-[0.24em] text-(--text-muted)'>
          © 2026 Azzam Al Kahil. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
