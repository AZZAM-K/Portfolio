import { experienceData } from '@/constants'
import Image from 'next/image'

const Experience = () => {
  return (
    <section className='experience bg-black text-white py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-16'>
          <span className='bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent'>
            My Experience
          </span>
        </h2>
        <div className='grid grid-cols-1 gap-8'>
          {experienceData.map((job, index) => (
            <div
              key={index}
              className='bg-gray-900 p-6 rounded-xl border-2 border-gray-800 transition-all duration-300 hover:border-red-600 hover:shadow-xl hover:shadow-red-900/20 transform hover:-translate-y-2'
            >
              <div className='flex items-center gap-4 mb-4'>
                <div className='bg-red-900/30 rounded-full p-2 h-12 w-12 shrink-0 flex items-center justify-center overflow-hidden'>
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={24}
                    height={24}
                    className='w-full h-full object-contain'
                  />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-100'>
                    {job.role}
                  </h3>
                  <p className='text-red-500 font-semibold'>{job.company}</p>
                </div>
              </div>
              <p className='text-gray-500 text-sm mb-3'>{job.date}</p>
              <p className='text-gray-400'>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
