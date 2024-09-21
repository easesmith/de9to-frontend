import PlusImg from '@/assets/medical-doctor-logo-for-sale 1.png';
import VectorImg from '@/assets/Vector.png';
import { FaLocationArrow } from 'react-icons/fa';
import ReactStars from 'react-stars';
import { Button } from './ui/button';

const Clinic = () => {
    return (
        <div className="grid grid-cols-[80%_20%]">
            <div className='rounded-[5px] flex flex-col gap-5'>
                <p className='text-[#838383] text-xl font-semibold font-inter'>Choose clinic near you</p>
                <div className='p-4 rounded-[6px] flex gap-[10px] shadow-lg'>
                    <div className='rounded-[6px] w-[210px] h-[210px]'>
                        <img src={PlusImg} alt="" />
                    </div>
                    <div className='pe-[25px] ps-[9px] gap-6 w-[calc(100%-210px)]'>
                        <div className='flex items-center justify-between gap-4'>
                            <div className='flex items-center gap-4'>
                                <h4 className='text-[#1A1A1A] text-2xl font-semibold font-inter'>DentMarc Dental Clinic</h4>
                            </div>
                            <div>
                                <ReactStars size={25} count={5} value={5} color2={'#FF8A00'} />
                                <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start gap-2'>
                            <h5 className='text-[#717171] text-base font-semibold font-inter'>Multi-Speciality Clinic</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-[6px] rounded-[35px] px-[10px]'>
                                    <img src={VectorImg} alt="" />
                                    <p className='text-[#838383] text-xs font-normal font-inter'>2-8+ years Experience</p>
                                </div>
                                <div className='flex items-center gap-[6px] rounded-[35px] px-[10px]'>
                                    <img src={VectorImg} alt="" />
                                    <p className='text-[#838383] text-xs font-normal font-inter'>3 Dentists</p>
                                </div>
                                <div className='flex items-center gap-[6px] rounded-[35px] px-[10px]'>
                                    <img src={VectorImg} alt="" />
                                    <p className='text-[#838383] text-xs font-normal font-inter'>₹500-1000 for consultation</p>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Clinic