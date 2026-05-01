'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/constants'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className='fixed top-6 left-0 right-0 z-50'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='panel panel-strong flex items-center justify-between rounded-lg px-4 py-3 md:px-6'>
          <a href='#home' className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <span className='font-display text-xs text-(--brand-cyan) tracking-[0.3em]'>
                AZZAM<span className='text-white'>_K</span>
              </span>
            </div>
          </a>
          <div className='hidden md:flex items-center gap-6'>
            {navItems.map(item => (
              <a
                href={item.href}
                key={item.name}
                className='text-(--text-muted) text-xs uppercase tracking-[0.24em] px-2 py-1 rounded-sm
                 hover:text-(--brand-cream) hover:bg-[rgba(31,227,242,0.08)] transition-colors duration-200'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-(--text-muted) hover:text-(--brand-cream) transition-colors'
              aria-label='Toggle menu'
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='panel mt-3 rounded-lg px-4 py-4 md:hidden'>
            <div className='flex flex-col gap-2'>
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-(--text-muted) text-xs uppercase tracking-[0.24em] px-2 py-2 rounded-sm
                   hover:text-(--brand-cream) hover:bg-[rgba(31,227,242,0.08)] transition-colors duration-200'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
