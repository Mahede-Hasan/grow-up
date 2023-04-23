import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Nav1 = () => {
    return (
        <div className='lg:px-[80px] md:px-[70px] sm:px-[50px] bg-blue-950 h-[50px] w-full lg:flex md:flex justify-between sm:hidden'>

            {/* Navbar Contact Area */}
            <div className="first-half-area flex">
                <div className="flex justify-center items-center cursor-pointer">

                    <PhoneIcon className='w-5 h-5 text-orange-300'></PhoneIcon>

                    <p className='text-[14px] text-white hover:text-orange-300 transition-all duration-500 font-semibold pl-1'>+8801704877492</p>
                </div>

                {/* Divider */}
                <div className="divider absolute lg:left-[220px] md:left-[210px] top-[15px] w-[0.5px] h-[20px] bg-slate-500"></div>
                <div className="flex justify-center items-center cursor-pointer pl-4">

                    <EnvelopeIcon className='w-5 h-5 text-orange-300'></EnvelopeIcon>
                    
                    <p className='text-[14px] text-white hover:text-orange-300 transition-all duration-500 font-semibold pl-1'>contact.mahede@gmail.com</p>
                </div>
            </div>

            {/* Navbar Login and Social area */}
            <div className="first-half-area flex">
                <div className="flex justify-center items-center cursor-pointer">
                    <a href="#" className='text-[15px] text-white hover:text-orange-300 transition-all duration-500 font-semibold pl-1'>Login</a>
                </div>

                {/* Divider */}
                <div className="divider absolute lg:right-[278px] md:right-[268px] top-[15px] w-[0.5px] h-[20px] bg-slate-500"></div>

                <div className="flex justify-center items-center cursor-pointer pl-4">
                <a href="#" className='text-[15px] text-white hover:text-orange-300 transition-all duration-500 font-semibold pl-1'>Register</a>
                </div>

                {/* Social Icon */}
                <div className="social flex justify-center items-center gap-5 pl-7">
                <div className="text-white text-[22px] cursor-pointer hover:text-orange-300 transition-all duration-500">
                <ion-icon name="logo-facebook" className=''></ion-icon>
                </div>
                <div className="text-white text-[22px] cursor-pointer hover:text-orange-300 transition-all duration-500">
                <ion-icon name="logo-instagram" className=''></ion-icon>
                </div>
                <div className="text-white text-[22px] cursor-pointer hover:text-orange-300 transition-all duration-500">
                <ion-icon name="logo-linkedin" className=''></ion-icon>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Nav1;