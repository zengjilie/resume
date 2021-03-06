import { MenuAlt2Icon } from '@heroicons/react/outline';
import { AiFillGithub } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
function Header({ toggle, setToggle }) {
    return (
        <div className='border-b-[1px] fixed top-0 backdrop-blur-lg border-gray-700 z-30 bg-gray-700/10 pb-4 w-full'>
            <div className='mx-auto px-4 md:px-0 md:w-[900px] z-50 static'>
                <div className='grid grid-cols-4 text-xl font-bold pt-4 text-white' >

                    <div
                        onClick={setToggle}
                        className='pointer-cursor'
                        
                    >
                        <MenuAlt2Icon
                            className='hover:bg-gray-700 p-1 md:p-2 cursor-pointer bg-gray-800 rounded-sm w-8 md:w-10'
                        />
                    </div>

                    <div
                        onClick={() => scroll.scrollToTop()}
                        className='cursor-pointer col-span-2 flex items-center justify-center '>
                        <img
                            className="w-6 md:w-8 object-contain"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/664px-Texas_Longhorns_logo.svg.png"
                            alt="ut-austin-logo"
                        />

                        <p className="pl-1 md:pl-2 text-xl md:text-3xl">
                            Alex Zeng
                        </p>
                    </div>

                    <a href="https://github.com/zengjilie" className='hover:text-white text-gray-300 flex items-center justify-end w-25 cursor-pointer' >
                        <AiFillGithub className='h-6 w-6'/>
                        <p  className='hidden  md:inline pl-2 font-medium'>
                            Github
                        </p>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Header
