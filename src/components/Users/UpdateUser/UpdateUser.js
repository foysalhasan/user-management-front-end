import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { RiServiceLine } from 'react-icons/ri'
import { FaRegEnvelope } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlinePhotograph } from 'react-icons/hi'
import { useParams, useNavigate } from 'react-router'
import swal from 'sweetalert'

const UpdateUser = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const { id } = useParams()
  const { handleSubmit, register, reset } = useForm({
    defaultValues: { email: '', firstname: '' },
  })
  // INFO: GET THE USER
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        reset(data)
      })
  }, [reset, id])

  const updateUser = (data) => {
    const url = `http://localhost:5000/user/${id}`
    console.log(data)
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        swal({
          title: 'Good job!',
          text: 'User Updated Successfully !!!',
          icon: 'success',
        })
        navigate('/users')
      })
  }

  // INFO: UPDATE THE USER

  return (
    <div className="container py-40">
      <div className="max-w-3xl bg-white rounded shadow-md mx-auto p-5">
        <form onSubmit={handleSubmit(updateUser)} className="grid grid-cols-2 gap-x-8 gap-y-3">
          <div className="space-y-3">
            <label htmlFor="name" className="uppercase text-sm font-bold text-gray-900">
              name
            </label>
            <div className="relative">
              <input
                required
                {...register('name')}
                type="text"
                className="block border-b-4 border-transparent focus:border-indigo-600 w-full  bg-gray-100 outline-none rounded-sm py-2 pl-8 pr-4"
              />
              <RiServiceLine className="absolute left-2 top-3 text-gray-500 text-xl" />
            </div>
          </div>
          <div className="space-y-3">
            <label htmlFor="name" className="uppercase text-sm font-bold text-gray-900">
              Email
            </label>
            <div className="relative">
              <input
                required
                {...register('email')}
                type="email"
                className="block border-b-4 border-transparent focus:border-indigo-600 w-full  bg-gray-100 outline-none rounded-sm py-2 pl-8 pr-4"
              />
              <FaRegEnvelope className="absolute left-2 top-3 text-gray-500 text-xl" />
            </div>
          </div>
          <div className="space-y-3">
            <label htmlFor="name" className="uppercase text-sm font-bold text-gray-900">
              Location
            </label>
            <div className="relative">
              <input
                required
                {...register('location')}
                type="text"
                className="block border-b-4 border-transparent focus:border-indigo-600 w-full  bg-gray-100 outline-none rounded-sm py-2 pl-8 pr-4"
              />
              <HiOutlineLocationMarker className="absolute left-2 top-3 text-gray-500 text-xl" />
            </div>
          </div>
          <div className="space-y-3">
            <label htmlFor="name" className="uppercase text-sm font-bold text-gray-900">
              Photo URL
            </label>
            <div className="relative">
              <input
                {...register('img')}
                type="text"
                className="block border-b-4 border-transparent focus:border-indigo-600 w-full  bg-gray-100 outline-none rounded-sm py-2 pl-8 pr-4"
              />
              <HiOutlinePhotograph className="absolute left-2 top-3 text-gray-500 text-xl" />
            </div>
          </div>
          <div className="mt-3">
            <input type="submit" className="px-8 py-3 text-sm font-bold rounded-md cursor-pointer bg-indigo-600 text-white uppercase" value="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
