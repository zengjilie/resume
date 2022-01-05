import {Link} from 'react-scroll';

function Menu({toggle,setToggle}) {
    return (
        <div >
            <div
                className={
                    `${toggle? "visible":"invisible"} 
                    fixed 
                    top-[73px] 
                    flex 
                    flex-col 
                    p-2
                    md:p-10 
                    space-y-3
                    items-center
                    md:items-start
                    md:space-y-4 
                    h-[250px]
                    md:h-screen 
                    text-gray-400 
                    z-50 
                    border-r-[1px] 
                    border-b-[1px]
                    border-gray-700 
                    rounded-br-xl  
                    bg-gray-900
                    w-full
                    md:w-[250px]`}
                    
            >

                <Link
                    to='skills'
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-lg hover:text-white cursor-pointer"
                >Skills</Link>

                <Link
                    to='education'
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-lg hover:text-white cursor-pointer"
                >Education</Link>

                <Link
                    to='experience'
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-lg hover:text-white cursor-pointer"
                >Experience</Link>

                <Link
                    to='projects'
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-lg hover:text-white cursor-pointer"
                >Projects</Link>

                <Link
                    to='awards'
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-lg hover:text-white cursor-pointer"
                >Awards</Link>

                <Link
                    to='contacts'
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-lg hover:text-white cursor-pointer"
                >Contacts</Link>

            </div>

        </div>
    )
}

export default Menu
