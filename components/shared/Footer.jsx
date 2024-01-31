import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="bg-slate-800 text-stone-50 pt-8 pb-2 px-4">


        <div className="flex items-center justify-center gap-4 pb-4">
            <div className="text-sm font-sans flex flex-col items-center gap-1">
                <p className="text-xs slate-50 font-bold tracking-wide">Contact Us</p>
                <div className="flex items-center gap-1">
                    <Image
                        src="/icons/envelope.svg"
                        alt="envelope"
                        width={24}
                        height={24}
                        className="w-4 h-4 lg:w-6 lg:h-6"
                    />
                    <Link className="text-xs" href="mailto:address">thrasherlanding@gmail.com</Link>
                </div>

            </div>

            <div className="text-sm font-sans">
            <p className="text-xs text-slate-50 font-bold text-center tracking-wide">Be Social</p>
                <Link className="uppercase font-light tracking-wider text-xs" href="https://www.facebook.com/groups/376994079969092/?mibextid=NSMWBT">the coalition</Link>
            </div>
        </div>
        <div className="text-xs font-sans font-light text-center text-slate-200">
            <p>Thrasher Landing © 2024</p>
        </div>

    </footer>
  )
}

export default Footer
