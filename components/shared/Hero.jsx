import { Button } from "@/components/ui/button"
import Link from "next/link"
import { oswald } from "@/lib/fonts"


const Hero = () => {
  return (

    <section className="h-[700px] relative flex flex-col justify-center items-center bg-stone-900 bg-[url('/images/unsplash-bg.jpg')] bg-cover bg-center bg-blend-overlay">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-stone-50 text-4xl md:text-5xl lg:text-6xl tracking-widest mb-4">Thrasher Landing</h1>

                <div className="underline bg-stone-100 mx-auto"></div>

                    <p className="montFont font-extralight  tracking-[1.5px] text-stone-200 text-xs md:text-sm lg:text-base text-center mt-4 uppercase">Friendly neighborhood in Hixson, TN</p>
        </div>
        <div className="flex items-center gap-4 mt-10">
                <Button asChild className="bg-stone-400 text-black border-stone-400 hover:bg-stone-300 hover:transition-all hover:ease-out hover:duration-150 w-28">
                    <Link href="/">Documents</Link>
                </Button>
                <Button asChild className="bg-transparent border border-slate-400 hover:bg-stone-600 hover:border-stone-900 hover:transition-all hover:duration-150 hover:ease-out w-28">
                    <Link href="/" className="tracking-wide">Events</Link>
                </Button>
            </div>

        </section>

  )
}

export default Hero
