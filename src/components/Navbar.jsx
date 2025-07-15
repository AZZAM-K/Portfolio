import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sidebar from './Sidebar'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = bool => setIsOpen(bool)

  return (
    <>
      <nav className='flex justify-between items-center px-5 lg:px-25 pt-10 pb-1 fixed top-0 left-0 w-full z-1000 nav'>
        <h1 className='text-3xl font-bold text-white after:content-["-k"] after:text-red-400 after:ml-0.5'>
          azzam
        </h1>
        <ul className='hidden lg:flex space-x-10 justify-between text-lg'>
          <li>
            <Link
              to={'/'}
              className={`${
                path === '/' ? 'text-white font-bold' : 'text-gray-400'
              } hover:text-white before:content-["#"] before:text-red-400`}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to={'/projects'}
              className={`${
                path === '/projects' ? 'text-white font-bold' : 'text-gray-400'
              } hover:text-white before:content-["#"] before:text-red-400`}
            >
              projects
            </Link>
          </li>
        </ul>
        {isOpen ? (
          <FaTimes
            className='text-3xl text-gray-400 lg:hidden cursor-pointer'
            onClick={() => toggleMenu(false)}
          />
        ) : (
          <FaBars
            className='text-3xl text-gray-400 lg:hidden cursor-pointer'
            onClick={() => toggleMenu(true)}
          />
        )}
      </nav>
      <Sidebar isOpen={isOpen} />
    </>
  )
}

export default Navbar
