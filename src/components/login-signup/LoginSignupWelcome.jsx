import img1 from '@/assets/login-img1.png'
import logo from '@/assets/logo.png'

const LoginSignupWelcome = () => {
    return (
        <div className='bg-gradient-to-b from-[#95C22B] overflow-hidden via-[#C0E95F] to-[#7BA616] w-full'>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <div className="flex justify-center items-center mt-10">
                        <div className='bg-white py-4 px-5 rounded-full mx-auto'>
                            <img src={logo} className='max-w-40 w-full' alt="logo" />
                        </div>
                    </div>
                    <div className="w-[85%] mt-14 mx-auto">
                        <h2 className='font-inter font-semibold text-4xl text-center text-white'>The One-in-All <br /> Dental Solutions</h2>
                        <p className='font-inter font-normal text-center mt-2 text-[#FFFFFF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                    </div>
                </div>
                <img className='mt-3 w-11/12 mx-auto' src={img1} alt="" />
            </div>
        </div>
    )
}

export default LoginSignupWelcome