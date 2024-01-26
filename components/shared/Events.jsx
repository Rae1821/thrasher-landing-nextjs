import Image from 'next/image';


const Events = () => {
  return (
    <div className="bg-cyan-600 z-0 pt-16">
<div className="h-[2px] w-24 bg-stone-600 mx-auto"></div>
      <div className="flex flex-col items-center justify-center gap-4 mx-auto">

        {/* left side */ }
        <div className="mx-auto mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 mt-12">Upcoming Events</h2>
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
        <div className="h-[400px]">
          <div className="h-[300px] mt-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 grid-rows-3 gap-4">
            <Image
                  src="/images/house.jpg"
                  alt="house 1"
                  height={1000}
                  width={1000}
                  className="w-full shadow-lg rounded col-span-1 row-span-1 lg:col-start-2 lg:col-span-2"
                />

            </div>
        </div>
      </div>
    </div>
  )
}

export default Events
