function Experience() {
    return (
        <div className="px-4 md:px-20 text-white space-y-2">
            <header className="text-white text-lg font-bold">
                💻 Work Experience
            </header>

            <section className="bg-gray-800 p-4 shadow-sm space-y-4 rounded-sm">
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <header className="font-semibold">
                            Industrial Design Intern
                        </header>
                        <p className="text-sm ">
                            Jul 2019 - Aug 2019
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>
                            KCLKA Machinery
                        </p>
                        <p className="text-sm ">
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

                <hr className="h-[1px] bg-gray-700 border-none"/>

                <div className="space-y-1">
                    <div className="flex justify-between">
                        <header className="font-semibold">
                            Industrial Design Intern
                        </header>
                        <p className="text-sm ">
                            Jun 2019 - July 2019
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>
                            361 Degrees International Ltd
                        </p>
                        <p className="text-sm ">
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
