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
                    p-10 
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
                <p
                    onClick={setToggle}
                    className="hover:text-white cursor-pointer"
                >Skills</p>
                <p
                    onClick={setToggle}
                    className="hover:text-white cursor-pointer"
                >Education</p>
                <p
                    onClick={setToggle}
                    className="hover:text-white cursor-pointer"
                >Experience</p>
                <p
                    onClick={setToggle}
                    className="hover:text-white cursor-pointer"
                >Projects</p>
                <p
                    onClick={setToggle}
                    className="hover:text-white cursor-pointer"
                >Awards</p>
            </div>

            <div
                onClick={setToggle}
                className={`${toggle? "visible":"invisible"} cursor-pointer absolute z-40 w-full h-screen`}
            >
            </div>
        </div>
    )
}

export default Menu
