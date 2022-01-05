export default function Education() {
  return (
    <div className="px-4 md:px-20 space-y-2">
      <header className="text-white text-lg font-bold">
        📕 Education
      </header>

      <div className="bg-gray-800 p-4 shadow-sm space-y-2 rounded-sm">
        <div className=" text-white grid grid-cols-2">
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
        </div>

        <div className=" text-white grid grid-cols-2">
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
        </div>
      </div>
    </div>
  )
}