import logo from '@/assets/logo.png'
import { lazy, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import BackdropLoader from './components/backdrop-loader/BackdropLoader'
import ErrorModal from './components/ErrorModal'
import ProtectedRoute from './components/ProtectedRoute'
import { Dialog } from './components/ui/dialog'
import UnAuthorizationAlert from './components/unauthorization-alert/UnAuthorizationAlert'
import ApplicationForm from './pages/dentist/ApplicationForm'
import BankDetails from './pages/dentist/BankDetails'
import Clinic from './pages/dentist/clinic-details/Clinic'
import DentistSignup from './pages/dentist/DentistSignup'
import OtherDetails from './pages/dentist/OtherDetails'
import PersonalDetails from './pages/dentist/personal-details/PersonalDetails'
import { handleErrorModal } from './store/slices/errorSlice'
import { useScrollToTop } from './hooks/useScrollToTop'
import ComplaintList from './pages/complaint/ComplaintList'
// import ComplaintDetails from './pages/complaint/ComplaintDetails'
import AddComplaint from './pages/complaint/AddComplaint'
import ComplaintDetails from './pages/complaint/ComplaintDetails'

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
const Payment = lazy(() => import('./pages/profile/payment/Payment'))
const UpdateProfile = lazy(() => import('./pages/profile/UpdateProfile'))
const ChangePassword = lazy(() => import('./pages/profile/ChangePassword'))
const NotificationsSettings = lazy(() => import('./pages/profile/NotificationsSettings'))
const DeleteAccount = lazy(() => import('./pages/profile/DeleteAccount'))
const PatientForm = lazy(() => import('./pages/PatientForm'))
const TreatmentPayment = lazy(() => import('./pages/profile/payment/TreatmentPayment'))
const TreatmentDetails = lazy(() => import('./pages/profile/TreatmentDetails'))

const App = () => {
  const dispatch = useDispatch();

  const { isErrorModalOpen, message, isUnautorizedModalOpen } = useSelector((state) => state.error);
  const { isLoading } = useSelector((state) => state.loading);

  const { pathname } = useLocation();

  useScrollToTop([pathname])

  return (
    <>
      <Dialog open={isErrorModalOpen} onOpenChange={() => dispatch(handleErrorModal({ isOpen: false, message: "" }))}>
        <ErrorModal message={message} />
      </Dialog>

      <UnAuthorizationAlert
        authorizationAlertModalOpen={isUnautorizedModalOpen}
      />

      {isLoading && <BackdropLoader />}

      <Suspense fallback={
        <div className='w-full h-screen bg-white text-black flex flex-col justify-center items-center text-xl font-semibold'>
          <img src={logo} className='w-32 mt-2' alt="" />
          Loading...
        </div>
      }>
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
          <Route path='/patient-form/:dentalCampId' element={<PatientForm />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/profile/medical-records/appointment' element={<Appointments />} />
            <Route path='/profile/medical-records/treatment' element={<MedicalRecords />} />
            <Route path='/profile/medical-records/treatment/:treatmentId' element={<TreatmentDetails />} />
            {/* <Route path='/profile/appointments' element={<Appointments />} /> */}
            <Route path='/profile/my-feedback' element={<MyFeedback />} />
            <Route path='/profile/payment/appointment' element={<Payment />} />
            <Route path='/profile/payment/treatment' element={<TreatmentPayment />} />
            <Route path='/profile/update-profile' element={<UpdateProfile />} />
            <Route path='/profile/change-password' element={<ChangePassword />} />
            <Route path='/profile/notifications-settings' element={<NotificationsSettings />} />
            <Route path='/profile/complaints' element={<ComplaintList />} />
            <Route
              path="/profile/complaints/:complaintId"
              element={<ComplaintDetails />}
            />
            <Route
              path="/profile/complaints/add-complaint"
              element={<AddComplaint />}
            />
            <Route path='/profile/delete-account' element={<DeleteAccount />} />
          </Route>


          <Route path='/dentist/dentist-signup' element={<DentistSignup />} />
          <Route path='/dentist/application' element={<ApplicationForm />} />
          <Route path='/dentist/application/personal-details' element={<PersonalDetails />} />
          <Route path='/dentist/application/other-details' element={<OtherDetails />} />
          <Route path='/dentist/application/bank-details' element={<BankDetails />} />
          <Route path='/dentist/application/clinic' element={<Clinic />} />
          {/* <Route path='/dentist/application/clinic-update-time' element={<Clinic2 />} /> */}
        </Routes>
      </Suspense>
      <Toaster />
    </>
  )
}

export default App
