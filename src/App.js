function App() {
  return (
    <div className="flex flex-col px-4 bg-gray-900 h-screen">
      <header className="flex items-center justify-center text-xl font-bold text-center py-5 text-white">
        <img 
          className="w-8 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/664px-Texas_Longhorns_logo.svg.png" 
          alt="ut-austin-logo"  
        />
        <p>
           Jilie (Alex) Zeng 
        </p>
      </header>

      <hr className="border-gray-700"/>

      <section className="py-4 space-y-2">
        <p className="text-white text-xl font-semibold"> 
          Education:
        </p>

        <p className=" text-white grid grid-cols-2">
          <div className="flex flex-col space-y-2">

            <p>
              - University of Texas at Austin
            </p>

            <p className="text-sm text-gray-400">
              &nbsp;&nbsp;&nbsp;Major in Information Studies
            </p>
          </div>

          <div className="flex justify-end text-white">
            <p>
              2021 - present
            </p>
          </div>
        </p>
      </section>

    </div>
  );
}

export default App;
