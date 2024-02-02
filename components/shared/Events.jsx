import Image from 'next/image';




const Events = () => {
  return (
    <div className="magicPattern bg-opacity-20 py-32 px-24 z-0" id="events">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mx-auto max-w-6xl">

        {/* left side */ }
        <div className="mx-auto mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 mt-12 text-slate-900">Upcoming Events</h2>
            <div className="flex items-start gap-2">
              <div className="h-10 w-[3px] bg-cyan-700"></div>
              <p className="leading-2 text-sm w-[350px]">Here you'll find information on any upcoming community get togethers.</p>
            </div>

            <div className="mt-12 flex items-center gap-2 rounded-lg shadow bg-white max-w-md">
                <p className="flex flex-col items-center bg-cyan-600  w-12 p-4 rounded-tl-md rounded-bl-md text-slate-50 text-sm">APR <span className="font-semibold">14</span></p>
                <div className="leading-2">
                    <h3 className="font-semibold">HOA Meeting</h3>
                    <p className="font-light text-sm">Location TBD | 6pm</p>
                </div>
            </div>
            <div>

            </div>

        </div>
        {/* right side */ }


          {/* <div className="relative">
            <span className="block absolute h-[225px] w-[300px] md:h-[350px] md:w-[450px] bg-slate-800 -right-6 -top-6 rounded shadow"></span>
            <Image
                src="/images/crowd.jpg"
                alt="house 1"
                height={500}
                width={500}
                className="rounded-sm my-0 mx-auto  p-0 overflow-hidden h-full w-full transition-shadow duration-200 ease-linear shadow-xl relative"
              />
          </div> */}
      </div>
    </div>
  )
}

export default Events
