import Image from "next/image";

const Events = () => {
  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div id="events" className="magicPattern z-0 bg-opacity-20 px-24 py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 lg:flex-row">
        {/* left side */}
        <div className="mx-auto mb-20">
          <h2 className="mb-6 mt-12 font-playfair text-4xl font-bold text-slate-900 md:text-5xl">
            Upcoming Events
          </h2>
          <div className="flex items-start gap-2">
            <div className="h-10 w-[3px] bg-cyan-700"></div>
            <p className="w-[350px] text-sm leading-relaxed">
              Here you&apos;ll find information on any upcoming community get
              togethers.
            </p>
          </div>

          <div className="mt-12 flex h-[100px] w-[350px] items-center gap-2 rounded-lg bg-white shadow">
            <p className="relative flex h-full w-12 flex-col items-center rounded-l-md bg-cyan-600 p-4 text-sm font-semibold text-slate-50">
              APR <span>14</span>
              <span className="mt-2 text-xs font-light">2024</span>
            </p>

            <div className="ml-4 leading-relaxed">
              <h3 className="mb-2 text-xl font-semibold">HOA Meeting</h3>
              <p className="mb-2 flex gap-1 text-sm">
                <Image
                  src="/icons/map-pin.svg"
                  width={16}
                  height={16}
                  alt="map icon"
                />
                Location TBD
              </p>
              <p className="flex gap-1 text-sm">
                <Image
                  src="/icons/clock.svg"
                  height={16}
                  width={16}
                  alt="time of event"
                />
                6pm
              </p>
            </div>
          </div>
        </div>
        {/* right side */}

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
  );
};

export default Events;
