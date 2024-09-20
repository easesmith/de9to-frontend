import React, {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
const Blog = lazy(()=> import ('./pages/blog/Blog'))
const BlogDetail = lazy(()=> import('./pages/blog/BlogDetail'))
const About = lazy(()=> import ('./pages/About/AboutUs'))
const DentalCamp = lazy(()=> import('./pages/dentalCamp/DentalCamp'))
const OurClinic = lazy(()=> import('./pages/ourClinic/OurClinic'))


const App = () => {
  return (
    <Routes>
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/dental-camp' element={<DentalCamp />} />
      <Route path='/our-clinic' element={<OurClinic />} />
    </Routes>
  )
}

export default App
