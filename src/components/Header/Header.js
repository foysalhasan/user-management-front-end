import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiBookmark } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="bg-yellow-500 py-3">
      <div className="container flex items-center justify-between mx-auto px-4">
        <NavLink to="/" className="flex items-center space-x-1">
          <FiBookmark className="inline-block text-gray-900 text-2xl" />
          <div className="font-bold text-2xl text-gray-900">FOYSAL HASAN</div>
        </NavLink>
        <nav className="flex items-center justify-end gap-x-5 flex-1 uppercase text-lg font-bold">
          <Link to="/" className="hover:text-red-600">
            home
          </Link>
          <Link to="/users" className="hover:text-red-600">
            users
          </Link>
          <Link to="/user/add" className="hover:text-red-600">
            <button className="text-white uppercase bg-gray-900 font-bold text-sm px-7 py-3 rounded-full hover:bg-indigo-600">add user</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
