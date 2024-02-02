import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="bg-slate-800 text-stone-50 pt-8 pb-2 lg:pb-4  px-4">
        <div className="flex items-center justify-center gap-4 pb-4">

                <Link className="text-xs" href="mailto:address">
                        <Image
                            src="/icons/envelope.svg"
                            alt="envelope"
                            width={24}
                            height={24}
                            className="w-6 h-6 lg:w-8 lg:h-8"
                        />
                    </Link>
                    <Link className="uppercase font-light tracking-wider text-xs" href="https://www.facebook.com/groups/376994079969092/?mibextid=NSMWBT">
                        <Image
                            src="/icons/facebook.svg"
                            alt="facebook"
                            width={24}
                            height={24}
                            className="lg:w-[32px] lg:h-[32px]"
                        />
                    </Link>
        </div>
        <div className="text-sm font-sans font-light text-center text-slate-200">
            <p>© Thrasher Landing 2024</p>
        </div>

    </footer>
  )
}

export default Footer
