import carouselImg from '@/assets/carouselImg.png';
import PlusImg from '@/assets/medical-doctor-logo-for-sale 1.png';
import VerifiedImg from '@/assets/verified 1.png';
import testVideo from '@/assets/videos/test.mp4';
import { Badge } from "@/components/ui/badge";
import { FaGraduationCap, FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import ReactStars from 'react-stars';

const DentistBasicDetails = ({details}) => {

    return (
        <div className="grid grid-cols-[75%_300px] gap-4">
            <div className='rounded-[5px] flex flex-col gap-5'>
                {/* <p className='text-[#838383] text-xl font-semibold font-inter'>Choose clinic near you</p> */}
                <div className='p-4 rounded-[6px] flex gap-[10px] shadow-md'>
                    <div>
                        <div className='rounded-[6px] relative w-[210px] h-[210px]'>
                            <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                            <img className='h-full w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${details?.personalDetails?.image}`} alt="" />
                        </div>
                        <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: {details?.educationalQualification?.regNumber}</p>
                    </div>
                    <div className='pe-[25px] ps-[9px] gap-6 w-[calc(100%-210px)]'>
                        <div className='flex items-center justify-between gap-4'>
                            <div className='flex items-center gap-4'>
                                <h4 className='text-[#1A1A1A] text-2xl font-semibold font-inter'>{`${details?.personalDetails?.Firstname} ${details?.personalDetails?.lastName}`}</h4>
                                {/* <Button variant="outline" className="flex gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]">
                                    <FaLocationArrow className='text-[#95C22B]' />
                                    <span>Search on map</span>
                                </Button> */}
                            </div>
                            <div>
                                <ReactStars edit={false} size={25} count={5} value={5} color2={'#FF8A00'} />
                                <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start gap-2'>
                            <div className="flex items-center gap-2 mt-1">
                                <FaGraduationCap className='text-[#95C22B] text-2xl' />
                                <div className='flex gap-2 items-center'>
                                    <p className=' text-[#95C22B] font-inter font-semibold'>{details?.personalDetails?.degree}</p>
                                    <div className='w-[2px] h-[14px] bg-[#95C22B]'></div>
                                    <p className='text-[#95C22B] font-inter font-semibold'>Oral Pathology</p>
                                    <div className='w-[2px] h-[14px] bg-[#95C22B]'></div>
                                    <p className='text-[#95C22B] font-inter font-semibold'>Dr. Narang’s Dental Hub</p>
                                </div>
                            </div>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>Expertise:</b> In-depth knowledge of dental anatomy, pathology, and clinical practices</li>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>Commitment:</b> Dedicated to providing high-quality oral care</li>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>Approach:</b> Focused on patient comfort and long-term oral health</li>
                            </ul>
                        </div>
                        <Badge className="rounded-md text-[#95C22B] text-sm font-semibold border-[#95C22B] mt-8" variant="outline">{details?.educationalQualification?.yearsOfExperience} + years Experience</Badge>

                        {/* <div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='relative rounded-md h-full'>
                <ReactPlayer
                    url={testVideo}
                    playing={true}
                    controls
                    width="100%"
                    height="100%"
                    light={
                        <div className='h-full'>
                            <img className='h-full' src={carouselImg} alt="" />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="bg-[#95C22B] rounded-full flex justify-center cursor-pointer items-center h-[70px] w-[70px]">
                                    <FaPlay className='text-xl text-white' />
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default DentistBasicDetails