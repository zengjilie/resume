function Contact() {
    return (

        <div id="contacts" className="px-4 md:px-0 mx-auto  md:w-[900px] space-y-2 text-white">

            <header className="text-white text-lg font-bold">
                🤝 &nbsp; Contacts
            </header>

            <div className="grid grid-cols-2 gap-4 border-[1px] border-gray-700 p-4 rounded-xl">

                <div className="flex flex-col items-center justify-center space-y-2">

                    <p className="font-semibold">
                        Email
                    </p>

                    <p className="text-sm text-gray-400">
                        zengjilie@gmail.com
                    </p>
                </div>

                <div className="flex flex-col items-center justify-between space-y-2">
                    <p className="font-semibold">
                       WeChat 
                    </p>

                    <p className="text-sm text-gray-400">
                        alex_xiaozeng
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Contact
