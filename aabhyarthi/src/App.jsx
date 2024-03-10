import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About  from './pages/About'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Dashbord from './pages/Dashbord'
import Project from './pages/Projects'


export default function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/signin" element={<SignIn /> } />
      <Route path="/signUp" element={<SignUp /> } />
      <Route path="/dashboard" element={<Dashbord /> } />
      <Route path="/project" element={<Project /> } />
     
    </Routes>
    </BrowserRouter>
  )
}
