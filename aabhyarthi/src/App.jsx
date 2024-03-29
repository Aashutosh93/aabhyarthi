import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import About from './pages/About'
import Dashbord from './pages/Dashbord'
import Home from './pages/Home'
import Project from './pages/Projects'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'


export default function App() {
  return (
    <BrowserRouter >
    <Header/>

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
