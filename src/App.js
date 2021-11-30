import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import AddUser from './components/Users/AddUser/AddUser'
import UpdateUser from './components/Users/UpdateUser/UpdateUser'
import Users from './components/Users/Users'

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/update/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  )
}

export default App
