import { useLocation } from 'react-router'
import { Link } from 'react-router'

const Sidebar = ({ isOpen }) => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div
      className={`lg:hidden ${
        !isOpen && 'right-[-100%]'
      } flex flex-col px-10 transition-all ease-out duration-300 py-5 justify-between fixed top-25 right-0 bg-[#242833]`}
    >
      <ul className='flex flex-col gap-10 text-2xl'>
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
    </div>
  )
}

export default Sidebar
