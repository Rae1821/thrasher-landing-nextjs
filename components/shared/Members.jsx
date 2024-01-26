import { montserrat, playfair_display } from "@/lib/fonts"

const Members = () => {
  return (
    <section className="bg-cyan-800 h-screen">
        <div className="text-center pt-24 flex flex-col items-center justify-center">
            <h2 className={`${montserrat.className} text-5xl flex items-center gap-2 font-semibold tracking-wide`}>MEET <span className={`${playfair_display.className} text-xl font-light font-lowercase italic`}>the</span> BOARD</h2>
            <p className="uppercase tracking-wider">Making the HOA magic happen</p>
        </div>
        <div>

        </div>

    </section>
  )
}

export default Members
