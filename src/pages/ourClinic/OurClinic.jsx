import React, { useEffect, useState } from 'react'
import Layout from '@/component/Layout/Layout'
import { FaChevronUp } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';
import ReactStars from 'react-stars';
import ButtonLocation, { AllProfileCard, FilterName, RangeSlider } from '@/component/MiniCompo/MiniCompo';
import VerifiedCheckImg from '../../assets/verified 1.png'
import PlusImg from '../../assets/medical-doctor-logo-for-sale 1.png'
import VectorImg from '../../assets/Vector.png'
import Clinic from '@/components/Clinic';
import ProfessionalImg1 from '../../assets/Ellipse 3.png'
import ProfessionalImg2 from '../../assets/Ellipse 4.png'
import ProfessionalImg3 from '../../assets/Ellipse 5.png'
import ProfessionalImg4 from '../../assets/Ellipse 6.png'
import ProfessionalImg5 from '../../assets/Ellipse 7.png'
import ProfessionalImg6 from '../../assets/Ellipse 8.png'
import ProfessionalImg7 from '../../assets/Ellipse 9.png'
import DoctorImg from '../../assets/codifyformatter__2_-removebg-preview 1.png'
import ImgBackgroundImg from '../../assets/Group.png'
// import ClinicBasicDetails from '@/components/ClinicBasicDetails';
// import ClinicBasicDetails from '@/components/ClinicBasicDetails';
// import { Slider } from "@/components/ui/slider"
import ShadcnPagination from '@/components/shadcnCompo/ShadCompo';
import ReactPagination from '@/component/allComponents/ReactPagination';
import useGetApiReq from '@/hooks/useGetApiReq';


const OurClinic = () => {

    const [amount, setAmount] = useState(0)


    const handleAmount = (amount) => {
        setAmount(amount + 500)
    }

    const { res, fetchData, isLoading } = useGetApiReq();
    const [allClinics, setAllClinics] = useState([]);
    const [pageCount, setPageCount] = useState(1)
    const [page, setPage] = useState(1);

    const getClinics = async () => {
        fetchData(`/patient/get-all-Clinics?page=${page}`);
    }

    useEffect(() => {
        getClinics();
    }, [page])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            setAllClinics(res?.data?.data?.clinics);
            setPageCount(res?.data?.data?.pagination?.totalPages);
            console.log("clinics response", res);
        }
    }, [res])

    return (
        <Layout>
            <main className='w-full'>
                <section className='flex items-center justify-end  pr-20'>
                    <div className='flex flex-col gap-[18px] w-[483px]'>
                        <h1 className='text-[#0D0E0E] text-[60px] font-bold font-inter leading-[72px]'>Expert Care,<br /> Right Next Door</h1>
                        <p className='text-[#787878] text-base italic font-bold font-inter'>Where you get the list of certified doctors with years of
                            professional experiences</p>
                        <AllProfileCard />
                    </div>
                    <div className='relative'>
                        <img src={DoctorImg} alt="doctor-img" />
                    </div>
                </section>
                <img src={ImgBackgroundImg} alt="background-img" className='absolute -top-[4%] right-0 -z-10' />
                <div className='max-w-[1240px] w-full mx-auto flex flex-col'>
                    <section className='w-full flex justify-between gap-6 my-12'>
                        <div className='p-4 rounded-[5px] w-[307px]'>
                            <p className='text-[#838383] text-xl font-semibold font-inter'>Advance Filter</p>
                            <div className='flex flex-col'>
                                {/* <FilterName name="Free Range" />
                                <div className='flex flex-col gap-4'>
                                    <Slider defaultValue={[33]} max={100} step={1} className='' onChange={handleAmount} />
                                    <p className='text-[#1A1A1A] text-sm font-medium font-inter'>Amount: ₹{amount} - ₹{amount + 1000}</p>
                                </div>
                                <RangeSlider /> */}
                                {/* <div>
                                    <div className='h-4 w-[300px] bg-[#95C22B] rounded-2xl relative'>
                                        <div className='absolute bg-[red] right-[25%] h-full w-full'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="range" name="" id="" min='500' max='1000' />
                                        <input type="range" name="" id="" />
                                    </div>
                                </div> */}
                            </div>
                            <div className='h-[289px]'>
                                <FilterName name="Rating" />
                                <div>
                                    <div className="flex items-center gap-2 py-[10px]">
                                        <Checkbox id="terms" />
                                        <Label className="flex items-center gap-2"><ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={5} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>5.0</p></Label>
                                    </div>
                                    <div className="flex items-center gap-2 py-[10px]">
                                        <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                        <Label className="flex items-center gap-2"><ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={4} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>4.0 & up</p></Label>
                                    </div>
                                    <div className="flex items-center gap-2 py-[10px]">
                                        <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                        <Label className="flex items-center gap-2"><ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={3} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>3.0 & up</p></Label>
                                    </div>
                                    <div className="flex items-center gap-2 py-[10px]">
                                        <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                        <Label className="flex items-center gap-2"><ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={1} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>2.0 & up</p></Label>
                                    </div>
                                    <div className="flex items-center gap-2 py-[10px]">
                                        <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                        <Label className="flex items-center gap-2"><ReactStars count={5} edit={false} size={18} color2={'#FF8A00'} value={1} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>1.0 & up</p></Label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FilterName name="Location" />
                                <div className='flex flex-wrap items-center gap-[10px]'>
                                    <ButtonLocation location="Delhi" />
                                    <ButtonLocation location="Location 2" />
                                    <ButtonLocation location="Location" />
                                    <ButtonLocation location="Location 4" />
                                    <ButtonLocation location="Location 5" />
                                    <ButtonLocation location="Location 6" />
                                    <ButtonLocation location="Location 7" />
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-[60px] w-[909px]">
                            <div className='rounded-[5px] flex flex-col gap-5'>
                                <p className='text-[#838383] text-xl font-semibold font-inter'>Choose clinic near you</p>
                                {allClinics?.map((clinic) => (
                                    <Clinic
                                        key={clinic?._id}
                                        clinic={clinic}
                                    />
                                ))}
                            </div>
                            <ReactPagination pageCount={pageCount} setPage={setPage} />
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export default OurClinic
