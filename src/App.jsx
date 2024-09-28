import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

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

const MedicalRecords = lazy(() => import('./pages/profile/MedicalRecords'))
const Appointments = lazy(() => import('./pages/profile/Appointments'))
const MyFeedback = lazy(() => import('./pages/profile/MyFeedback'))
const Payment = lazy(() => import('./pages/profile/Payment'))
const UpdateProfile = lazy(() => import('./pages/profile/UpdateProfile'))
const ChangePassword = lazy(() => import('./pages/profile/ChangePassword'))
const NotificationsSettings = lazy(() => import('./pages/profile/NotificationsSettings'))
const DeleteAccount = lazy(() => import('./pages/profile/DeleteAccount'))


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

          <Route path='/profile/medical-records' element={<MedicalRecords />} />
          <Route path='/profile/appointments' element={<Appointments />} />
          <Route path='/profile/my-feedback' element={<MyFeedback />} />
          <Route path='/profile/payment' element={<Payment />} />
          <Route path='/profile/update-profile' element={<UpdateProfile />} />
          <Route path='/profile/change-password' element={<ChangePassword />} />
          <Route path='/profile/notifications-settings' element={<NotificationsSettings />} />
          <Route path='/profile/delete-account' element={<DeleteAccount />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
