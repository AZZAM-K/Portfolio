import myImage from '../assets/myImage.jpg'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10'>
      <div className='flex flex-col gap-10 mt-5' data-aos='fade-right'>
        <h1 className='font-bold text-white text-4xl'>
          I am a <span className='text-red-400'>full-stack</span> developer
        </h1>
        <p className='text-wrap text-gray-400 text-lg leading-8'>
          I deliver professional web applications, from intuitive interfaces to
          secure server-side logic
        </p>
        <a
          href='#contacts'
          className='border py-2 px-4 text-white text-lg border-red-400 inline-block w-fit font-bold hover:text-red-400'
        >
          Contact ME =&gt;
        </a>
      </div>
      <div className='w-full h-fit' data-aos='zoom-in'>
        <img src={myImage} className='object-cover aspect-square h-100' />
      </div>
    </div>
  )
}

export default HeroSection
