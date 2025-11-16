import TypingAnimation from '@/components/TypingAnimation'
import { MapPin, File } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import ContactButton from '@/components/ContactButton'

const Hero = () => {
  return (
    <section className='home min-h-screen w-full bg-black text-white flex items-center justify-center pt-24 pb-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col-reverse lg:flex-row gap-15 items-center'>
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight'>
              <span className='block text-gray-300 font-light'>Hi, I am</span>
              <span className='block text-red-600 mt-2'>Azzam Al Kahil</span>
            </h1>
            <div className='mt-4 min-h-10'>
              <TypingAnimation />
            </div>
            <p className='mt-6 text-lg text-gray-400 max-w-lg mx-auto md:mx-0'>
              I’m a passionate Fullstack Developer specializing in Next.js and
              React. I build modern, scalable web applications with clean and
              efficient code. Let’s turn ideas into reality.
            </p>
            <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <Link
                href='/CV.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-4 px-8 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105'
              >
                View my CV
                <File className='w-7 h-7' />
              </Link>
              <ContactButton />
            </div>
            <div className='mt-10 flex flex-col items-center md:items-start space-y-4'>
              <div className='flex space-x-6'>
                <Link
                  href='http://linkedin.com/in/azzam-al-kahil'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Linkedin'
                  className='text-gray-400 hover:text-red-500 transition-all transform hover:scale-125 duration-300'
                >
                  <LinkedinIcon className='w-7 h-7' />
                </Link>
                <Link
                  href='https://github.com/AZZAM-K'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='GitHub'
                  className='text-gray-400 hover:text-red-500 transition-all transform hover:scale-125 duration-300'
                >
                  <GithubIcon className='w-7 h-7' />
                </Link>
              </div>
              <div className='flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors duration-300'>
                <MapPin className='w-5 h-5' />
                <span>Lebanon - Tripoli</span>
              </div>
            </div>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group'>
              <div
                className='absolute -inset-2 bg-linear-to-br from-red-600 via-red-500 to-red-700 rounded-full blur-2xl
               opacity-70 group-hover:opacity-100 transition-opacity duration-300'
              ></div>
              <div
                className='absolute -inset-1 bg-linear-to-br from-red-500 to-red-700 rounded-full blur-lg opacity-50
               group-hover:opacity-75 transition-opacity duration-300'
              ></div>
              <Image
                src='/hero.jpg'
                alt='azzam-k'
                width={384}
                height={384}
                unoptimized
                loading='eager'
                className='relative z-10 w-full h-full rounded-full object-fill border-4 border-red-500/50 shadow-2xl shadow-red-600/50'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
