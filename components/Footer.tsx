import { GithubIcon, LinkedinIcon } from '@/components/Icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full bg-black border-t border-gray-800 text-gray-400 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 py-8'>
          <div className='shrink-0 flex items-center'>
            <span
              className='text-3xl font-extrabold tracking-widest bg-linear-to-r from-red-500 to-red-700 bg-clip-text
             text-transparent cursor-pointer'
            >
              AZZAM-K
            </span>
          </div>
          <div className='flex space-x-6'>
            <Link
              href='https://github.com/AZZAM-K'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110'
              title='GitHub'
            >
              <GithubIcon className='w-8 h-8' />
            </Link>
            <Link
              href='http://linkedin.com/in/azzam-al-kahil'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110'
              title='LinkedIn'
            >
              <LinkedinIcon className='w-8 h-8' />
            </Link>
          </div>
        </div>
        <div className='border-t border-gray-700 pt-8 mt-8'>
          <p className='text-center text-sm text-gray-500'>
            © 2025 Azzam Al Kahil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
