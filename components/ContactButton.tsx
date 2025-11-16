'use client'

import { Link as ScrollLink } from 'react-scroll'

const ContactButton = () => {
  return (
    <ScrollLink
      to='contact'
      duration={500}
      smooth
      offset={-50}
      className='inline-block px-8 py-3 bg-red-600 text-gray-200 font-medium rounded-lg shadow-lg hover:bg-red-700
       transition-all duration-300 transform hover:scale-105 cursor-pointer'
    >
      Get in Touch
    </ScrollLink>
  )
}

export default ContactButton
