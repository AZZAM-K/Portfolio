import Image from 'next/image'

const About = () => {
  return (
    <section className='about w-full bg-black text-gray-300 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-16'>
          <span className='bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent'>
            About Me
          </span>
        </h2>
        <div className='flex flex-col md:flex-row gap-16 items-center'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96'>
              <div className='absolute inset-0 bg-linear-to-br from-red-500 via-red-600 to-red-700 rounded-full blur-3xl opacity-50 animate-pulse'></div>
              <div className='absolute inset-2 bg-linear-to-br from-red-400 to-red-600 rounded-full blur-2xl opacity-30'></div>
              <Image
                src='/logo.png'
                alt='Azzam-K Developer Logo'
                width={384}
                height={384}
                priority
                unoptimized
                className='relative z-10 w-full h-full object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg'
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left space-y-6'>
            <p className='mt-6 text-lg text-gray-400 max-w-lg mx-auto md:mx-0'>
              Hi! I’m <span className='text-red-500'>Azzam Al Kahil</span>, a
              Fullstack Developer with a strong focus on Next.js, React, and
              Node.js. I’m passionate about building modern, scalable web
              applications that blend performance, clean code, and great user
              experiences.
            </p>
            <p className='text-lg text-gray-400 max-w-lg mx-auto md:mx-0'>
              I love solving problems, bringing ideas to life, and continuously
              learning new technologies to sharpen my skills as a developer.
              Whether it’s creating smooth user interfaces, designing robust
              APIs, or optimizing workflows — I enjoy every part of the
              development process.
            </p>
            <p className='text-lg text-gray-400 max-w-lg mx-auto md:mx-0'>
              When I’m not coding, you’ll often find me exploring new tools,
              learning about emerging tech, or working on personal projects that
              challenge me to grow. I’m always excited to take on new
              challenges, collaborate with others, and build something
              meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
