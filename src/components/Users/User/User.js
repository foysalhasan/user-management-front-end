import React from 'react'
import { FiUser, FiTrash2, FiEdit } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const User = ({ user, handleDelete }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 relative flex gap-x-4 items-center p-4 rounded-sm shadow-md border-b-2 border-indigo-400">
      <div className="w-20 flex-shrink-0 h-20 rounded-full flex items-center justify-center bg-white text-center p-1 ring-2 ring-blue-800">
        {user.img ? <img src={user.img} alt="" className="h-full w-full object-cover rounded-full" /> : <FiUser className="text-4xl text-indigo-600" />}
      </div>
      <div className="">
        <h3 className="uppercase font-bold text-lg text-blue-500">{user.name}</h3>
        <p className="text-gray-600 text-sm font-medium">{user.email}</p>
        <p className="text-gray-600 text-xs font-medium">{user.location}</p>
      </div>
      <div className="text-right space-x-1 absolute right-2 top-10">
        <button
          className="px-3 rounded-sm py-2 bg-red-700 text-white"
          onClick={() => {
            handleDelete(user._id)
          }}
        >
          <FiTrash2 />
        </button>
        <button
          onClick={() => {
            navigate(`/user/update/${user._id}`)
          }}
          className="px-3 rounded-sm py-2 bg-indigo-700 text-white"
        >
          <FiEdit />
        </button>
      </div>
    </div>
  )
}

export default User
