import { montserrat, playfair_display } from "@/lib/fonts"

const Members = () => {
  return (
    <section id="about" className="pb-4 bg-gradient-to-t from-cyan-600 via-cyan-700 to-cyan-800 min-h-screen mx-auto">

        <div className="text-center pt-12 flex flex-col items-center justify-center">
            <div className="w-[2px] h-[75px] bg-stone-100 mx-auto mb-12"></div>
            <h2 className="font-sans text-5xl flex items-center gap-2 font-semibold tracking-wide text-stone-50">MEET <span className="font-playfair text-xl font-light font-lowercase italic">the</span> BOARD</h2>
            <p className="uppercase tracking-wider text-stone-300 mt-2 text-sm">Making the HOA magic happen</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 mx-auto mt-16 lg:max-w-6xl">
          <div className="p-4 text-center flex gap-2 items-center w-72 mx-auto">
            <div className="avatar w-32 h-32 bg-cyan-800 mx-auto"></div>
              <h3 className="font-sans font-black tracking-wide mt-4 text-3xl text-left text-[#B33619]">Greg
                <span className="block">Dooley</span>
                <span className="block font-normal uppercase tracking-wider text-sm">President</span>
              </h3>
          </div>
          <div className="p-4 text-center flex gap-2 items-center mx-auto w-72 lg:col-start-2 lg:row-start-2">
            <div className="avatar w-32 h-32 bg-cyan-800 mx-auto "></div>
              <h3 className="font-sans font-black tracking-wide mt-4 text-3xl text-black text-left ">Janet
                <span className="block">Moore</span>
                <span className="block font-normal uppercase tracking-wider text-sm">Vice President</span>
              </h3>
          </div>
          <div className="p-4 text-center flex gap-2 items-center mx-auto w-72 lg:col-start-3 lg:row-start-3">
            <div className="avatar w-32 h-32 bg-cyan-800 mx-auto "></div>
              <h3 className="font-sans font-black tracking-wide mt-4 text-3xl text-black text-left ">Doyle
                <span className="block">Pittman</span>
                <span className="block font-normal uppercase tracking-wider text-sm">Secretary</span>
              </h3>
          </div>
          <div className="p-4 text-center flex gap-2 items-center mx-auto w-72 lg:col-start-4 lg:row-start-4">
            <div className="avatar w-32 h-32 bg-cyan-800 mx-auto "></div>
              <h3 className="font-sans font-black tracking-wide mt-4 text-3xl text-black text-left ">Ande
                <span className="block">Hixson</span>
                <span className="block font-normal uppercase tracking-wider text-sm">Treasurer</span>
              </h3>
          </div>
        </div>

    </section>
  )
}

export default Members
