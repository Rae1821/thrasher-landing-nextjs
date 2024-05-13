import { Button } from "@/components/ui/button";
import Link from "next/link";
import { playfair_display } from "@/lib/fonts";

const Hero = () => {
  return (
    <section className="relative flex h-[700px] flex-col items-center justify-center bg-stone-900 bg-[url('/images/unsplash-bg.jpg')] bg-cover bg-center bg-blend-overlay">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 font-playfair text-4xl font-semibold tracking-widest text-stone-50 md:text-5xl lg:text-6xl">
          Thrasher Landing
        </h1>

        <div className="lineAnimation mx-auto w-[200px] bg-stone-100 underline"></div>

        <p className="mt-4 text-center  font-sans text-xs font-extralight uppercase tracking-[1.5px] text-stone-200 md:text-sm lg:text-base">
          Friendly neighborhood in Hixson, TN
        </p>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <Button
          asChild
          className="w-28 border-cyan-600 bg-emerald-600 text-stone-50 shadow-sm shadow-cyan-600 hover:bg-cyan-500 hover:transition-all hover:duration-150 hover:ease-out"
        >
          <Link href="/">Documents</Link>
        </Button>
        <Button
          asChild
          className="w-28 border border-[#748C76] bg-transparent shadow-sm shadow-cyan-600 hover:bg-cyan-600 hover:transition-all hover:duration-150 hover:ease-out"
        >
          <Link href="/" className="tracking-wide">
            Events
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
