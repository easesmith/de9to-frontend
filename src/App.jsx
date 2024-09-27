import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./pages/home/Home'))
const DentalCamp = lazy(() => import('./pages/dentalCamp/DentalCamp'))
const OurDentist = lazy(() => import('./pages/ourDentist/OurDentist'))
const OurClinic = lazy(() => import('./pages/ourClinic/OurClinic'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const BlogDetail = lazy(() => import('./pages/blog/BlogDetail'))
const About = lazy(() => import('./pages/About/AboutUs'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const ClinicDetails = lazy(() => import('./pages/ClinicDetails'))
const NotFound = lazy(() => import('./pages/notFound/NotFound'))
const DentistDetails = lazy(() => import('./pages/DentistDetails'))
const PaymentPage = lazy(() => import('./pages/PaymentPage'))
const ConfirmBookingPage = lazy(() => import('./pages/ConfirmBookingPage'))
const Login = lazy(() => import('./pages/Login'))


const App = () => {
  return (
    <>
      <Suspense fallback={<div className='w-full h-screen bg-white text-black flex justify-center items-center text-xl font-semibold'>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/dental-camp' element={<DentalCamp />} />
          <Route path='/our-dentist' element={<OurDentist />} />
          <Route path='/our-clinic' element={<OurClinic />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dental-camp' element={<DentalCamp />} />
          <Route path='/our-clinic' element={<OurClinic />} />
          <Route path='/our-clinic/:clinicId' element={<ClinicDetails />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/our-dentist/:dentistId' element={<DentistDetails />} />
          <Route path='/confirm-booking' element={<ConfirmBookingPage />} />
          <Route path='/payment' element={<PaymentPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
