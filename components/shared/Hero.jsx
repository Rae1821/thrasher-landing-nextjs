import { Button } from "@/components/ui/button"
import Link from "next/link"
import { playfair_display } from "@/lib/fonts"


const Hero = () => {
  return (

    <section className="h-[700px] relative flex flex-col justify-center items-center bg-stone-900 bg-[url('/images/unsplash-bg.jpg')] bg-cover bg-center bg-blend-overlay">

        <div className="flex flex-col justify-center items-center">
            <h1 className="font-playfair text-stone-50 text-4xl md:text-5xl lg:text-6xl tracking-widest mb-4 font-semibold">Thrasher Landing</h1>

                <div className="underline lineAnimation w-[200px] bg-stone-100 mx-auto"></div>

                    <p className="font-sans font-extralight  tracking-[1.5px] text-stone-200 text-xs md:text-sm lg:text-base text-center mt-4 uppercase">Friendly neighborhood in Hixson, TN</p>
        </div>

        <div className="flex items-center gap-4 mt-10">
                <Button asChild className="bg-cyan-600 text-stone-50 border-cyan-600 hover:bg-cyan-500 hover:transition-all hover:ease-out hover:duration-150 w-28 shadow-sm shadow-cyan-600">
                    <Link href="/">Documents</Link>
                </Button>
                <Button asChild className="bg-transparent border border-cyan-600 hover:bg-cyan-600 hover:transition-all hover:duration-150 hover:ease-out w-28 shadow-sm shadow-cyan-600">
                    <Link href="/" className="tracking-wide">Events</Link>
                </Button>
            </div>

        </section>

  )
}

export default Hero
