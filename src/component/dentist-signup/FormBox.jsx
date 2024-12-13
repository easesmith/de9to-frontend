// import { MdKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-router-dom";

import { BiUser } from "react-icons/bi"
import { Link } from "react-router-dom";

const FormBox = ({ title, setState, href, number }) => {
    // const clampedProgress = Math.min(Math.max(60, 0), 100);
    return (
        // <div className='rounded-xl shadow p-5 bg-white max-w-64 w-full'>
        //     <div className="flex justify-between items-center">
        //         <h2 className="font-extrabold font-roboto">{title}</h2>
        //         <Link to={href} className="bg-[#95C22B] w-5 h-5 rounded-md cursor-pointer flex justify-center items-center">
        //             <MdKeyboardArrowRight className="text-white text-lg" />
        //         </Link>
        //     </div>
        //     <div className="flex items-center gap-3 mt-3">
        //         <img className="w-10 rounded-full" src="https://github.com/shadcn.png" alt="" />
        //         <div className="w-[70%]">
        //             <div className="flex items-center gap-2">
        //                 <span className="font-bold font-roboto">30%</span>
        //                 <span className="text-[#6F6F6F] text-[9px] font-medium font-roboto">Comleted</span>
        //             </div>
        //             <div className="w-full h-[7px] rounded-md bg-[#E0E0E0] overflow-hidden">
        //                 <div className="w-full h-full bg-[#95C22B] -translate-x-32"></div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="flex gap-5 items-center mt-2">
        //         <div className="flex items-center gap-2">
        //             <div className="w-4 h-4 rounded-md bg-[#95C22B]"></div>
        //             <p className="font-semibold font-roboto text-[11px]">Completed</p>
        //         </div>
        //         <div className="flex items-center gap-2">
        //             <div className="w-4 h-4 rounded-md bg-[#E0E0E0]"></div>
        //             <p className="font-semibold font-roboto text-[11px]">Pending</p>
        //         </div>
        //     </div>
        // </div>
        <Link to={href}>
            <div className={`w-[325px] bg-[#FFFFFF] border-[1px] border-[#E5E7EB] rounded-lg p-3 flex justify-between items-center`}>
                <div className="flex items-center gap-4">
                    <div className={`bg-[#95C22B] w-10 h-10 rounded-full flex justify-center items-center`}>
                        <BiUser className={`text-[#FFFFFF] text-2xl`} />
                    </div>
                    <div className={`flex flex-col justify-center items-start`}>
                        <h2 className={`text-[#000000BF] text-xl font-medium font-montserrat`}>{title}</h2>
                        <span className={`text-[#00000080] text-xs font-medium font-montserrat`}>{number}</span>
                    </div>
                </div>
                {/* <div className="flex items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-8 border-blue-200"></div>
                        <div
                            className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-500"
                            style={{
                                clipPath: 'inset(0 0 50% 0)',
                                transform: `rotate(${clampedProgress * 1.8}deg)`,
                            }}
                        >
                            <div
                                className="absolute inset-0 rounded-full border-4 border-blue-500"
                                style={{
                                    clipPath: 'inset(0 0 50% 50%)',
                                    transform: `rotate(${clampedProgress > 50 ? 180 : 0}deg)`,
                                }}
                            ></div>
                        </div>
                        <span className="absolute text-[#95C22B] text-[10px] font-bold font-barlow">
                            {clampedProgress}%
                        </span>
                    </div>
                </div> */}
                <div className="relative w-14 h-14 border-8 border-[#D1E0FF] rounded-full">
                    <div className=" absolute top-[-20%] left-[-20%] w-14 h-14 border-8 border-[#155EEF] rounded-full flex justify-center items-center">
                        <span className="text-[#95C22B] text-xs font-barlow font-semibold">60%</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FormBox