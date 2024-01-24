import Image from 'next/image';

const Events = () => {
  return (
    <div className="p-12 h-screen mt-10 bg-slate-50">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 relative">
        <div className="max-w-lg mx-auto mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-display mb-4">Upcoming Events</h2>
            <div className="underline bg-cyan-700"></div>

            <div className="mt-12 flex items-center gap-2 rounded-md shadow bg-white">
                <p className="flex flex-col items-center bg-cyan-600 w-12 p-4 rounded-tl-md rounded-bl-md text-slate-50 text-sm">APR <span className="font-semibold">14</span></p>
                <div className="leading-2">
                    <h3 className="font-body font-semibold">HOA Yearly Meeting</h3>
                    <p className="font-light font-body tracking-wide">Location TBD | 6pm</p>
                </div>

            </div>
            <p className="font-body w-full mt-10 leading-2 tracking-wider text-sm">Stay tuned for announcements about upcoming potlucks and community get togethers.</p>
        </div>
        <div className="relative">
            <Image
                src="/images/house.jpg"
                alt="house"
                width={500}
                height={500}
                className="z-0 rounded shadow-xl"
            />
            <Image
                src="/images/thrasher-landing-sign-min.png"
                alt="sign"
                width={300}
                height={300}
                className="z-1 absolute -bottom-40 -left-24"
            />
        </div>
      </div>
    </div>
  )
}

export default Events
