import { MenuAlt2Icon } from '@heroicons/react/outline'
import { AiFillGithub } from 'react-icons/ai'

function Header() {
    return (
        <div className='border-b-[1px] fixed top-0 border-gray-700 z-50 bg-gray-900 pb-6 w-full'>
            <div className='mx-auto px-4 md:px-0 md:w-[900px] z-50 static'>
                <div className='flex items-center justify-between text-xl font-bold pt-6 text-white' >

                    <div className='w-25 pointer-cursor'>
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

                        <p className="pl-1 md:pl-2 text-xl md:text-3xl">
                            Alex Zeng
                        </p>
                    </div>

                    <div className='flex justify-end w-25 cursor-pointer' >
                        <AiFillGithub className='h-6 w-6 ' />
                        <p className='hidden  md:inline pl-2 font-medium'>
                            Github
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header
