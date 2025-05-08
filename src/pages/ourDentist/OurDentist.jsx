import Layout from '@/component/Layout/Layout'
import ButtonLocation, { AllProfileCard, FilterName } from '@/component/MiniCompo/MiniCompo'
import { useCallback, useEffect, useState } from 'react'
import DoctorImg from '../../assets/codifyformatter__2_-removebg-preview 1.png'
import ImgBackgroundImg from '../../assets/Group.png'

import Dentist1 from '@/component/allComponents/Dentist1'
import ReactPagination from '@/component/allComponents/ReactPagination'
import Clinic from '@/components/Clinic'
import DataNotFound from '@/components/DataNotFound'
import FilterCompo from '@/components/FilterCompo'
import SearchListCompo from '@/components/SearchListCompo'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import useGetApiReq from '@/hooks/useGetApiReq'
import { Helmet } from 'react-helmet-async'
import { FaFilter } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import ReactStars from 'react-stars'

const OurDentist = () => {

  const { res, fetchData, isLoading } = useGetApiReq();
  const { res: res3, fetchData: fetchData3, isLoading: isLoading3 } = useGetApiReq();
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)
  const [SearchAllDentists, setSearchAllDentists] = useState([])
  const [SearchAllClinics, setSearchAllClinics] = useState([]);
  const [allDentists, setAllDentists] = useState([])
  const [allClinics, setAllClinics] = useState([]);

  const getDentists = useCallback(async () => {
    fetchData(`/patient/get-dentists?page=${page}`);
  }, [page, fetchData])

  useEffect(() => {
    getDentists();
  }, [page])


  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("AllDentists:", res.data.data.dentists)
      setAllDentists(res.data.data.dentists)
      setSearchAllDentists(res.data.data.dentists)
      setPageCount(res.data.totalPages)
      setPage(res.data.currentPage)
    }
  }, [res])

  const getClinics = async () => {
    fetchData3(`/patient/get-all-Clinics?page=${page}`);
  }

  useEffect(() => {
    getClinics();
  }, [page])


  useEffect(() => {
    if (res3?.status === 200 || res3?.status === 201) {
      setAllClinics(res3?.data?.data?.clinics);
      setSearchAllClinics(res3?.data?.data?.clinics);
      console.log("clinics response", res3);
    }
  }, [res3])

  const { res: res2, fetchData: fetchData2, isLoading: isLoading2 } = useGetApiReq();

  const [gender, setGender] = useState('');
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleResize = () => {
    setIsFilterOpen(window.innerWidth > 700 && false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getfilterDentist = useCallback(async () => {
    if (location || rating || gender) {
      fetchData2(`/patient/filter?area=${location}&ratings=${rating}&gender=${gender}`);
    }
  }, [location, rating, gender, fetchData2])

  useEffect(() => {
    getfilterDentist();
  }, [location, rating, gender])


  useEffect(() => {
    if (res2?.status === 200 || res2?.status === 201) {
      console.log("ShortDentist:", res2)
      setAllDentists(res2?.data?.dentists)
    }
  }, [res2])

  const handleGenderChange = (value) => {
    setGender(value);
  }
  const handleRatingChange = (value) => {
    setRating(value);
  }
  const handleLocationChange = (value) => {
    setLocation(value);
  }

  const [seoData, setSeoData] = useState({
    title: "",
    description: "",
    focusedKeywords: "",
  });

  const { res: res1, fetchData: fetchData1 } = useGetApiReq();

  const getSeo = () => {
    fetchData1(`/patient/get-seo?pageName=our-dentists`);
  }

  useEffect(() => {
    getSeo();
  }, [])

  useEffect(() => {
    if (res1?.status === 200 || res1?.status === 201) {
      console.log("get seo api res: ", res1)
      const { seoTitle, focusedKeywords, description } = res1?.data?.seo;

      setSeoData({
        title: seoTitle,
        description: description,
        focusedKeywords: focusedKeywords,
      })
    }
  }, [res1])

  return (
    <Layout>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.focusedKeywords} />
      </Helmet>

      {!isFilterOpen ? <main className='w-full relative px-4'>
        <section className='flex items-center justify-end max-[900px]:hidden pr-20'>
          <div className='flex flex-col gap-[18px] w-[483px]'>
            <h1 className='text-[#0D0E0E] text-[60px] max-xl:text-[40px] font-bold font-inter max-xl:leading-[52px] leading-[72px]'>Expert Care,<br /> Right Next Door</h1>
            <p className='text-[#787878] text-base italic font-bold font-inter'>Where you get the list of certified doctors with years of
              professional experiences</p>
            <AllProfileCard />
          </div>
          <div className='relative'>
            <img src={DoctorImg} alt="doctor-img" />
          </div>
        </section>
        <img src={ImgBackgroundImg} alt="background-img" className='absolute max-[900px]:hidden -top-[4%] right-0 -z-10' />
        <div className='mt-5'>
          <SearchListCompo
            setAllClinics={setSearchAllClinics}
            setAllData={setSearchAllDentists}
          />
        </div>
        <section className='max-w-[1240px] w-full mx-auto flex flex-col gap-10 max-[700px]:gap-5 my-6'>
          <div className='max-[700px]:hidden rounded-[5px] flex flex-col gap-3'>
            <p className='text-[#838383] text-base font-semibold font-inter'>Advance Filter</p>
            <FilterCompo gender={gender} handleGenderChange={handleGenderChange} rating={rating} handleRatingChange={handleRatingChange} location={location} handleLocationChange={handleLocationChange} />
          </div>
          <div className="flex justify-end min-[700px]:hidden">
            <FaFilter onClick={() => setIsFilterOpen(true)} className='text-xl text-[#95C22B]' />
          </div>
          <div className='flex flex-col gap-[60px]'>
            <div className='flex flex-col justify-between gap-5'>
              <p className='text-[#838383] text-base font-semibold font-inter'>Choose Your Dentist</p>
              {
                allDentists.length > 0 && !isLoading ? allDentists.map((e, i) => {
                  return (
                    <Dentist1 key={i} dentist={e} />
                  )
                }) :
                  <DataNotFound name='Dentist' />
              }
            </div>
            <div className='flex flex-col justify-between gap-5'>
              {
                allClinics.length > 0 && !isLoading ? allClinics.map((clinic, i) => {
                  return (
                    <Clinic key={i} clinic={clinic} />
                  )
                }) :
                  ""
              }
            </div>
            {allDentists.length > 0 &&
              <ReactPagination pageCount={pageCount} setPage={setPage} />}
          </div>
        </section>
      </main>
        : <section className='px-4 py-8'>
          <div className='shadow-[0px_0px_10px_rgba(0,0,0,0.1)] px-3 py-6 bg-white rounded'>
            <div className="flex justify-between gap-3 items-center">
              <h2 className='text-[#838383] text-xl font-semibold font-inter'>Advance Filter</h2>
              <FaXmark onClick={() => setIsFilterOpen(false)} className='text-xl text-[#95C22B]' />
            </div>
            <div className=''>
              <FilterName name="Rating" />
              <div>
                <div className="flex items-center gap-2 py-[10px]">
                  <Checkbox
                    id="rating-5"
                    checked={rating === 5}
                    onCheckedChange={() => handleRatingChange(5)}
                  />
                  <Label className="flex items-center gap-2">
                    <ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={5} />
                    <p className='text-[#1A1A1A] text-sm font-normal font-inter'>5.0</p>
                  </Label>
                </div>
                <div className="flex items-center gap-2 py-[10px]">
                  <Checkbox
                    id="rating-4"
                    checked={rating === 4}
                    onCheckedChange={() => handleRatingChange(4)}
                  />
                  <Label className="flex items-center gap-2">
                    <ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={4} />
                    <p className='text-[#1A1A1A] text-sm font-normal font-inter'>4.0 & up</p>
                  </Label>
                </div>
                <div className="flex items-center gap-2 py-[10px]">
                  <Checkbox
                    id="rating-3"
                    checked={rating === 3}
                    onCheckedChange={() => handleRatingChange(3)}
                  />
                  <Label className="flex items-center gap-2">
                    <ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={3} />
                    <p className='text-[#1A1A1A] text-sm font-normal font-inter'>3.0 & up</p>
                  </Label>
                </div>
                <div className="flex items-center gap-2 py-[10px]">
                  <Checkbox
                    id="rating-2"
                    checked={rating === 2}
                    onCheckedChange={() => handleRatingChange(2)}
                  />
                  <Label className="flex items-center gap-2">
                    <ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={2} />
                    <p className='text-[#1A1A1A] text-sm font-normal font-inter'>2.0 & up</p>
                  </Label>
                </div>
                <div className="flex items-center gap-2 py-[10px]">
                  <Checkbox
                    id="rating-1"
                    checked={rating === 1}
                    onCheckedChange={() => handleRatingChange(1)}
                  />
                  <Label className="flex items-center gap-2">
                    <ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={1} />
                    <p className='text-[#1A1A1A] text-sm font-normal font-inter'>1.0 & up</p>
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <FilterName name="Location" />
              <div className='flex flex-wrap items-center gap-[10px]'>
                <ButtonLocation setLocation={setLocation} location={location} name="Najabgarh" />
                <ButtonLocation setLocation={setLocation} location={location} name="Ramlila Maidan" />
              </div>
            </div>
            <Button onClick={() => setIsFilterOpen(false)} className="bg-[#95C22B] mt-4 flex justify-center w-full h-10">
              Apply Filters
            </Button>
          </div>
        </section>}
    </Layout >
  )
}

export default OurDentist
