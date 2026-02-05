import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../context/CreateContext';
import { useContext } from 'react';

function NavbarDropdown() {
     const [open, setOpen] = useState(false);
     const {darkMode} = useContext(MyContext)
  return (
    <>
      <div className="relative">
      <button 
        onClick={() => setOpen(!open)}
        className={`px-4 ${darkMode ? 'bg-gray-950 text-white': 'bg-cyan-700 text-black'}   rounded-lg  font-medium cursor-pointer`}
      >
        Resources ▼
      </button>
      {open && (
        <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-50">
          <Link 
            to="/blog" 
            className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-green-700"
            onClick={() => setOpen(false)}
          >
            Blogs
          </Link>
          <Link 
            to="/learning" 
            className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-green-700"
            onClick={() => setOpen(false)}
          >
            Learn
          </Link>
        </div>
      )}
    </div>
    </>
  )
}

export default NavbarDropdown

