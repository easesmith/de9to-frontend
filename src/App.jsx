import React, {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(()=> import ('./pages/home/Home'))
const DentalCamp = lazy(()=> import('./pages/dentalCamp/DentalCamp'))
const OurDentist = lazy(()=> import('./pages/ourDentist/OurDentist'))
const OurClinic = lazy(()=> import('./pages/ourClinic/OurClinic'))
const Blog = lazy(()=> import ('./pages/blog/Blog'))
const BlogDetail = lazy(()=> import('./pages/blog/BlogDetail'))
const About = lazy(()=> import ('./pages/About/AboutUs'))
const Contact = lazy(()=> import ('./pages/Contact/Contact'))


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dental-camp' element={<DentalCamp />} />
      <Route path='/our-dentist' element={<OurDentist />} />
      <Route path='/our-clinic' element={<OurClinic />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
