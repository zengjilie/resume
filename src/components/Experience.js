function Experience() {
    return (
        <div className="px-4 md:px-0 mx-auto md:w-[900px] space-y-2 text-white">
            <header className="text-white text-lg font-bold">
                💻 Work Experience
            </header>

            <section className="border-[1px] border-gray-700 p-4 space-y-4 rounded-xl">
                <div className="space-y-1">
                    <div className="grid grid-cols-2">
                        <header className="flex justify-start font-semibold">
                            Industrial Design Intern
                        </header>
                        <p className="flex justify-end text-sm ">
                            Jul 2019 - Aug 2019
                        </p>
                    </div>

                    <div className="grid grid-cols-2 items-center justify-between">
                        <p className="flex justify-start">
                            KCLKA Machinery
                        </p>
                        <p className="flex justify-end text-sm ">
                            Jinjiang, Fujian, China
                        </p>
                    </div>

                    <ul className="pl-5 text-gray-400 text-sm list-disc">
                        <li>
                            Redesigned a Foam EVA Injection Moulding Machine using Rhino.
                        </li>
                        <li>
                            Created detailed 3D renderings and explosion diagrams using Keyshot.
                        </li>
                        <li>
                            One of my design proposals was applied to KCLKA’s next-generation model.
                        </li>
                    </ul>
                </div>

                <hr className="h-[1px] bg-gray-800 border-none" />

                <div className="space-y-1">
                    <div className="grid grid-cols-2 justify-between">
                        <header className="flex justify-start font-semibold">
                            Industrial Design Intern
                        </header>
                        <p className="flex justify-end text-sm ">
                            Jun 2019 - July 2019
                        </p>
                    </div>
                    <div className="grid grid-cols-2 items-center justify-between">
                        <p className="flex justify-start">
                            361 Degrees International Ltd
                        </p>
                        <p className=" flex justify-end text-sm ">
                            Jinjiang, Fujian, China
                        </p>
                    </div>

                    <ul className="pl-5 text-gray-400 text-sm list-disc">
                        <li>
                            Created 15+ shoe sketches and renderings using Adobe Photoshop.
                        </li>
                        <li>
                            Created 2 detailed 3D Models using Rhino and Grasshopper.
                        </li>
                        <li>
                            Ranked the second-best out of 15+ teams.
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Experience
