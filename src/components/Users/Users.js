import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import User from './User/User'

const Users = () => {
  const [users, setUsers] = useState([])

  //   INFO: LOAD USER DATA
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  // INFO: DELETE A USER
  const handleDelete = (id) => {
    const url = `http://localhost:5000/user/${id}`

    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const restUsers = users.filter((user) => user._id !== id)
              swal({
                title: 'Success',
                icon: 'success',
              })
              setUsers(restUsers)
            }
          })
      }
    })
  }

  return (
    <div className="container py-40">
      <div className="max-w-4xl grid grid-cols-2 gap-4 mx-auto p-5 rounded bg-white shadow-md">
        {!users.length ? (
          <h1 className="uppercase font-bold text-xxl">
            NO USER FOUND!
            <Link to="/user/add" className="text-green-700 ml-1 hover:underline">
              Add New
            </Link>
          </h1>
        ) : (
          users.map((user) => <User key={user._id} handleDelete={handleDelete} user={user}></User>)
        )}
      </div>
    </div>
  )
}

export default Users
