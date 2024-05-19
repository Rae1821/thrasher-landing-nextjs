import Image from "next/image";
import { boardMembers } from "../../constants/index";

const Members = () => {
  return (
    <section id="about" className="mx-auto min-h-screen bg-emerald-700 pb-12">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex flex-col items-center justify-center pt-8 text-center">
          <div className="mx-auto mb-12 h-[75px] w-[2px] bg-stone-100"></div>
          <h2 className="flex items-center gap-2 font-sans text-3xl font-semibold tracking-wide text-stone-50 md:text-4xl lg:text-5xl">
            MEET{" "}
            <span className="font-playfair text-xl font-light italic">the</span>{" "}
            BOARD
          </h2>
          <p className="mt-2 text-sm tracking-wider text-stone-300">
            Making the HOA magic happen
          </p>
        </div>

        <div className="-m-4 flex flex-wrap justify-center">
          {boardMembers.map((member) => (
            <div key={member} className="p-4 md:w-1/2 xl:w-1/4">
              <div className="rounded-lg bg-gray-100 p-6">
                <Image
                  src="https://dummyimage.com/720x400"
                  alt="content"
                  width={400}
                  height={720}
                  className="mb-6 h-40 w-full rounded object-cover object-center"
                />
                <h3 className="text-xs font-medium tracking-widest text-emerald-600">
                  {member.title}
                </h3>
                <p className="mb-4 text-lg font-medium text-gray-900">
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
