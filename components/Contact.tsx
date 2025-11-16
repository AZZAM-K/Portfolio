import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className='contact w-full bg-black text-gray-300 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-16'>
          <span className='bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent'>
            Contact Me
          </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start'>
          <div className='text-center md:text-left'>
            <h3 className='text-3xl font-bold text-gray-100 mb-4'>
              Let&apos;s Connect
            </h3>
            <p className='text-lg text-gray-400 mb-6'>
              I’m currently exploring internship and job opportunities where I
              can grow as a developer and contribute to impactful, real-world
              projects. I’m always eager to learn, collaborate, and take on new
              challenges.
            </p>
            <p className='text-lg text-gray-400'>
              If you have any questions, opportunities, or simply want to
              connect and exchange ideas, feel free to reach out — I’d be glad
              to chat and build new connections!
            </p>
          </div>

          <div className='p-4 sm:p-8 bg-gray-900 border border-gray-800 rounded-lg hover:border-red-600 hover:shadow-xl hover:shadow-red-900/20 duration-300 transition-all'>
            <h3 className='text-2xl font-semibold text-white mb-6'>
              Message Me Here
            </h3>
            <div className='space-y-6'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group'>
                <div className='p-3 bg-gray-800 rounded-full group-hover:bg-red-600 transition-colors duration-300 shrink-0'>
                  <Mail className='w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300' />
                </div>
                <Link
                  href='mailto:azzam.kahil.dev@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p className='text-sm text-gray-400'>Email</p>
                  <p className='text-lg text-gray-200 group-hover:text-red-500 transition-colors duration-300 break-all'>
                    azzam.kahil.dev@gmail.com
                  </p>
                </Link>
              </div>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group'>
                <div className='p-3 bg-gray-800 rounded-full group-hover:bg-red-600 transition-colors duration-300 shrink-0'>
                  <Phone className='w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300' />
                </div>
                <Link
                  href='https://wa.me/96176338952'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p className='text-sm text-gray-400'>Phone</p>
                  <p className='text-lg text-gray-200 group-hover:text-red-500 transition-colors duration-300'>
                    +961 76 338 952
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
