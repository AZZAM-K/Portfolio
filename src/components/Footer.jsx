import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full border-t border-gray-400 mt-20 pt-8 mb-4'>
      <div className='my-0 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mb-12'>
          <div>
            <p className='text-2xl font-bold text-white after:content-["-k"] after:text-red-400 after:ml-0.5 mb-3'>
              azzam
            </p>
            <p className='text-lg text-white'>
              Full-stack developer based in Tripoli, Lebanon
            </p>
          </div>
          <div>
            <p className='text-2xl text-white font-bold mb-4'>Media</p>
            <div className='flex gap-4'>
              <a href='https://github.com/AZZAM-K' target='_blank'>
                <FaGithub
                  size={30}
                  className='text-gray-400 hover:text-red-400'
                />
              </a>
              <a href='http://linkedin.com/in/azzam-al-kahil' target='_blank'>
                <FaLinkedin
                  size={30}
                  className='text-gray-400 hover:text-red-400'
                />
              </a>
            </div>
          </div>
        </div>
        <p className='text-center text-gray-400 text-lg'>
          © Copyright 2025. Made by azzam-k
        </p>
      </div>
    </footer>
  )
}

export default Footer
