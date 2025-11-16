'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import { navItems } from '@/constants'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-red-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='shrink-0 flex items-center'>
            <span
              className='text-3xl font-extrabold tracking-widest bg-linear-to-r from-red-500 to-red-700 bg-clip-text
             text-transparent cursor-pointer'
            >
              AZZAM-K
            </span>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-8'>
            {navItems.map(item => (
              <ScrollLink
                to={item.to}
                key={item.name}
                smooth={true}
                duration={500}
                offset={item.offset}
                className='text-gray-300 font-bold hover:text-red-500 transition-colors duration-200 px-3 py-2 rounded-md text-lg
                 cursor-pointer'
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-gray-300 hover:text-red-500 transition-colors'
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X size={24} className='hover:text-red-500' />
              ) : (
                <Menu size={24} className='hover:text-red-500' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-black/80 border-t border-b border-red-800'>
          <div className='flex flex-col space-y-2 px-4 py-4'>
            {navItems.map(item => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                className='text-gray-300 hover:text-red-500 transition-colors duration-200 block px-3 py-2 rounded-md text-base
                 font-medium cursor-pointer'
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
