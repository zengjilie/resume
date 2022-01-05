function Projects() {
    return (
        <div id='projects' className="px-4 md:px-0 mx-auto md:w-[900px] space-y-2 text-white">
            <header className="text-white text-lg font-bold">
                🎯 &nbsp;Projects
            </header>

            <div className="border-[1px] border-gray-700 p-4 space-y-4 rounded-xl">
                <section>
                    <div className="grid grid-cols-2">
                        <header className="flex justify-start text-sm md:text-base font-semibold">
                            Spotify-Clone (Front-End)
                        </header>
                        <p className="flex justify-end text-sm">
                            Dec 2021 - Jan 2022
                        </p>
                    </div>
                    <div className="pl-5 flex justify-between">
                        <ul className="text-gray-400 text-sm list-disc">
                            <li >
                                Developed a web application using Next.js, React.js, Tailwind CSS, NextAuth.js
                            </li>
                            <li>
                                Utilized NextAuth.js to achieve spotify user authentication
                            </li>
                            <li>
                                Implemented Spotify Web Api to achieve features including playlist querying, album querying, track querying, track playing, volume control, etc
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="h-[1px] bg-gray-800 border-none" />

                <section className="space-y-1">
                    <div className="grid grid-cols-2">
                        <header className="flex justify-start text-sm md:text-base font-semibold ">
                            Uber-Clone (Front-End)
                        </header>
                        <p className="flex justify-end text-sm">
                            Dec 2021 - Dec 2021
                        </p>
                    </div>
                    <div className="pl-5 flex justify-between">
                        <ul className="text-gray-400 text-sm list-disc">
                            <li >
                                Developed a mobile application using React Native, Redux, Tailwind CSS
                            </li>
                            <li>
                                Utilized Google Maps Api to achieve features including location autocompletion, direction drawing, distance calculation, price calcuation, etc
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="h-[1px] bg-gray-800 border-none" />

                <section className="space-y-1">
                    <div className="grid grid-cols-2">
                        <header className="flex justify-start text-sm md:text-base font-semibold">
                            Amazon-Clone (Full-Stack)
                        </header>
                        <p className="flex justify-end text-sm">
                            Dec 2021 - Dec 2021
                        </p>
                    </div>
                    <div className="pl-5 flex justify-between">
                        <ul className="text-gray-400 text-sm list-disc">
                            <li >
                                Developed a full-stack web application using React.js, CSS, Express.js, Strip.js, Firebase
                            </li>
                            <li>
                                Utilized Strip.js to achieve online payment and tracking module, used axios.js to manage http requests
                            </li>
                            <li>
                                Implemented Firebase to achieve features including user data storing, user authentication, order tracking, etc
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="h-[1px] bg-gray-800 border-none" />

                <section className="space-y-1">
                    <div className="grid grid-cols-2">
                        <header className="flex justify-start text-sm md:text-base font-semibold">
                            Augmented Reality User Manual (Design / Development)
                        </header>
                        <p className="flex justify-end text-sm">
                            Oct 2020 - Oct 2020
                        </p>
                    </div>
                    <div className="pl-5 flex justify-between">
                        <ul className="text-gray-400 text-sm list-disc">
                            <li >
                                Conducted an online survey of 193 Chinese residents on their attitudes and
                                behaviors towards COVID - 19
                            </li>
                            <li>
                                Analyzed the user data to identify user pain points and design opportunities.
                            </li>
                            <li>
                                Built a virtual 3D model of Sony SRS-HG 10 using Rhino (3D modeling software)
                            </li>
                            <li>
                                Developed an AR user manual application using Unity3D and Vuforia SDK
                            </li>
                            <li>
                                Tested the efficiency of the AR user manual with current counterparts, the speed
                                of the AR manual surpassed the paper manual by 69%, video manual by 86%
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="h-[1px] bg-gray-800 border-none" />

                <section className="space-y-1">
                    <div className="grid grid-cols-2">
                        <header className="flex justify-start text-sm md:text-base font-semibold">
                            COVID Kit: WeChat Mini Program (Design / Full-Stack)
                        </header>
                        <p className="flex justify-end text-sm">
                            Jun 2020 - Aug 2020
                        </p>
                    </div>
                    <div className="pl-5 flex justify-between">
                        <ul className="text-gray-400 text-sm list-disc">
                            <li >
                                Conducted an online survey of 193 Chinese residents on their attitudes and
                                behaviors towards COVID - 19
                            </li>
                            <li>
                                Analyzed the user data to identify user pain points and design opportunities.
                            </li>
                            <li>
                                Developed a Mini Program that showcases relevant COVID - 19 information
                                using WeChat Mini program SDK, JavaScript, wxml, wxjs, wxss, Echart.js, WeChat Cloud Base.
                            </li>
                            <li>
                                Collected relevant COVID - 19 information using Python, XPath, Beautiful Soup,
                                requests, json, openpyxl, Charles Proxy.
                            </li>
                        </ul>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Projects
