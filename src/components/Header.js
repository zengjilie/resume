import { MenuAlt2Icon } from '@heroicons/react/outline'
import { AiFillGithub } from 'react-icons/ai'
function Header() {
    return (
        <header className="px-4 md:px-20 flex items-center justify-between text-xl font-bold text-center pt-6 text-white">
            <div className='w-40 pointer-cursor'>
                <MenuAlt2Icon
                    className='p-2 cursor-pointer bg-gray-800 rounded-sm w-10'
                />
            </div>
            <div className='min-w-[160px] flex justify-center '>
                <img
                    className="w-6 md:w-8 object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/664px-Texas_Longhorns_logo.svg.png"
                    alt="ut-austin-logo"
                />

                <p className="pl-1 md:pl-2 text-base md:text-xl">
                    Jilie (Alex) Zeng
                </p>
            </div>
            <div className='flex items-start justify-end w-40 cursor-pointer' >
                <AiFillGithub className='h-6 w-6 '/>
                <p className='hidden  md:inline pl-2 font-medium'>
                    Github
                </p>
            </div>
        </header>
    )
}
export default Header
