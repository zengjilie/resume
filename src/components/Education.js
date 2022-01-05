export default function Education() {
  return (

    <div className="px-4 md:px-0 mx-auto  md:w-[900px] space-y-2 text-white">
      <header className="text-white text-lg font-bold">
        📕 &nbsp;Education
      </header>

      <div className="border-[1px] border-gray-700 p-4 space-y-4 rounded-xl">

        <section className=" text-white grid grid-cols-2">
          <div className="flex flex-col space-y-2">

            <p className="font-semibold">
              University of Texas at Austin
            </p>

            <p className="text-sm text-gray-400">
              Master of Science in Major in Information Studies | GPA: 3.66/4.0
            </p>
          </div>

          <div className="flex justify-end text-sm text-white">
            <p>
              2021 - present
            </p>
          </div>
        </section>

        <hr className="h-[1px] bg-gray-800 border-none" />

        <section className=" text-white grid grid-cols-2">
          <div className="flex flex-col space-y-2">

            <p className="font-semibold">
              Stanford Online Algorithm Specialization (Coursera)
            </p>

            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5MFCC8LK4UC2" className="text-sm text-gray-400">
              Certificate
            </a>

          </div>

          <div className="flex justify-end text-white text-sm">
            <a href="https://github.com/zengjilie/stanford-algorithms">
              Github Repo
            </a>
          </div>
        </section>

        <hr className="h-[1px] bg-gray-800 border-none" />

        <section className=" text-white grid grid-cols-2">
          <div className="flex flex-col space-y-2">

            <p className="font-semibold">
              National Taiwan University of Science and Technology
            </p>

            <p className="text-sm text-gray-400">
              Bachelor of Design in Industrial Design | GPA: 3.76/4.3
            </p>
          </div>

          <div className="flex justify-end text-white text-sm">
            <p>
              2016 - 2020
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}