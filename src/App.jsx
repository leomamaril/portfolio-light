import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navigation from './layout/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import MyProjects from "./pages/MyProjects"
import Contacts from "./pages/Contacts"
import Works from './pages/Works';
import ScrollToTop from './pages/ScrollToTop';
function App() {
  return (

   <BrowserRouter>
    <Navigation/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>} />  
      <Route path='/aboutMe' element={<AboutMe/>} />  
      <Route path='/projects' element={<MyProjects/>} />   
      <Route path='/contacts' element={<Contacts/>} />   
      <Route path='/project/:title' element={<Works/>} />   
    </Routes>
   </BrowserRouter>
     
  
  )
}

export default App
