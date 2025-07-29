import { MdEmail, MdWhatsapp } from 'react-icons/md'

const ContactSection = () => {
  return (
    <>
      <h2
        className='font-bold text-white text-3xl relative inline-block before:content-["#"] before:text-red-400 
        after:content-[""] after:block after:w-[10vw] after:h-px after:bg-red-400 after:absolute after:transform 
        after:translate-x-full after:-translate-y-1/2 after:right-[-16px] after:top-1/2'
      >
        contacts
      </h2>
      <div className='mt-12 flex flex-col md:flex-row justify-between items-start gap-8'>
        <p className='text-lg text-gray-400'>
          I'm currently seeking internship or job opportunities. However, if you
          have any other requests or questions, feel free to reach out, I'd be
          happy to connect
        </p>
        <div className='border border-gray-400 p-4'>
          <h3 className='font-bold text-xl text-white'>Message me here</h3>
          <div className='mt-4'>
            <a
              className='flex items-center gap-2 text-lg text-gray-400 mt-2 hover:text-red-400'
              href='mailto:azzam.alkahil@icloud.com'
            >
              <MdEmail size={25} />
              <span>azzam.alkahil@icloud.com</span>
            </a>
            <a
              className='flex items-center gap-2 text-lg text-gray-400 mt-2 hover:text-red-400'
              href='https://wa.me/96176338952'
            >
              <MdWhatsapp size={30} />
              <span>76 338 952</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
