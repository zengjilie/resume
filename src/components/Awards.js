function Awards() {
    return (

        <div id='awards' className="px-4 md:px-0 mx-auto  md:w-[900px] space-y-2 text-white">

            <header className="text-white text-lg font-bold">
                🎖 &nbsp; Awards
            </header>

            <div className="border-[1px] border-gray-700 p-4 space-y-4 rounded-xl">

                <section className=" text-white grid grid-cols-2">
                    <div className="flex flex-col space-y-2">

                        <p className="font-semibold">
                            KYMCO Motorcycle Design Competition, Finalist
                        </p>

                        <p className="text-sm text-gray-400">
                            Transportation design
                        </p>
                    </div>

                    <div className="flex justify-end text-sm text-white">
                        <p>
                            2020
                        </p>
                    </div>
                </section>

                <hr className="h-[1px] bg-gray-800 border-none" />

                <section className=" text-white grid grid-cols-2">
                    <div className="flex flex-col space-y-2">

                        <p className="font-semibold">
                            Corning Future Innovator Competition, Merit Award
                        </p>

                        <p className="text-sm text-gray-400">
                            Product design, award 10,000 TWD
                        </p>
                    </div>

                    <div className="flex justify-end text-sm text-white">
                        <p>
                            2018
                        </p>
                    </div>
                </section>

                <hr className="h-[1px] bg-gray-800 border-none" />

                <section className=" text-white grid grid-cols-2">
                    <div className="flex flex-col space-y-2">

                        <p className="font-semibold">
                        Corning Future Innovator Competition, Merit Award
                        </p>

                        <p className="text-sm text-gray-400">
                            Product design, award 10,000 TWD
                        </p>
                    </div>

                    <div className="flex justify-end text-sm text-white">
                        <p>
                            2017
                        </p>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Awards
