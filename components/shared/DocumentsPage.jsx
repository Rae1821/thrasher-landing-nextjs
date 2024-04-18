import Image from "next/image";
import { Separator } from "../ui/separator";
import Header from "./Header";
import { Button } from "../ui/button";

const DocumentsPage = () => {
  return (
    <div>
      <Header />
      {/* hero section */}
      <main className="min-h-screen">
        <div className="relative z-0 mb-8 flex h-[200px] flex-col items-center justify-center bg-stone-800 bg-[url('/images/unsplash-bg.jpg')] bg-cover bg-center bg-blend-overlay">
          <h1 className="z-10 font-playfair text-3xl font-black text-slate-50">
            HOA Documents
          </h1>
          <p className="mt-2 w-2/3 text-center font-sans text-sm text-slate-100">
            Click on each link below to view, print, or download the documents.
          </p>
        </div>

        {/* main documents section */}
        <div className="mt-12 flex flex-col items-center justify-center gap-8 py-12">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            {/* covenant */}
            <div className="h-56 rounded-xl border px-4 py-8 text-center shadow-lg md:w-72">
              <div className="mx-auto mb-2 w-10 rounded-full bg-teal-600 p-2 shadow-lg">
                <Image
                  src="/icons/document.svg"
                  alt="document"
                  height={28}
                  width={28}
                  // className="mx-auto mb-4"
                />
              </div>

              <h3 className="mt-2 text-sm font-bold uppercase tracking-wider">
                The Covenant
              </h3>
              <p className="mb-6 mt-2 w-64 text-sm">
                Rules & regulations for Thrasher Landing
              </p>
              <button className="border-2 border-[#0284C7]  bg-white px-8 py-0.5 text-xs uppercase text-neutral-700 shadow-[1px_1px_rgba(2,132,199),2px_2px_rgba(2,132,199),3px_3px_rgba(2,132,199),4px_4px_rgba(2,132,199),5px_5px_0px_0px_rgba(2,132,199)] transition duration-200 dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                View Document
              </button>
            </div>
            {/* covenant amendment */}
            <div className="h-56 w-72 rounded-xl border px-4 py-8 text-center shadow-lg">
              <Image
                src="/icons/document.svg"
                alt="document"
                height={32}
                width={32}
                className="mx-auto mb-4"
              />
              <h3 className="mt-2 text-sm font-bold uppercase tracking-wider">
                The Covenant Amendment
              </h3>
              <p className="mb-6 mt-2 w-64 text-center text-sm">
                Rules & regulations for Thrasher Landing
              </p>
              <button className="border-2 border-black  bg-white px-8 py-0.5 text-xs uppercase text-neutral-700 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                View Document
              </button>
            </div>
            {/* bi-laws */}
            <div className="h-56 w-72 rounded-xl border px-4 py-8 text-center shadow-lg">
              <Image
                src="/icons/document.svg"
                alt="document"
                height={32}
                width={32}
                className="mx-auto mb-4"
              />
              <h3 className="mt-2 text-center text-sm font-bold uppercase tracking-wider">
                The Bi-Laws
              </h3>
              <p className="mb-6 mt-2 w-64 text-center text-sm">
                Rules & regulations for Thrasher Landing
              </p>
              <button className="border-2 border-black  bg-white px-8 py-0.5 text-xs uppercase text-neutral-700 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                View Document
              </button>
            </div>
          </div>
        </div>
        {/* meeting minutes section */}
        <div className="mx-auto mt-12 w-full px-2 md:w-1/2">
          <h3 className="mb-4 font-sans text-xl font-semibold">
            Latest Meeting Minutes
          </h3>

          <div className="flex items-center justify-between border-b border-slate-100 px-2 py-4">
            <div className="flex items-center justify-start gap-2">
              <div className="rounded-full bg-slate-100 p-2 shadow">
                <Image
                  src="/icons/link.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="text-cyan-600"
                />
              </div>
              <p className="mt-2 text-left font-sans font-semibold">
                Jan 18, 2024{" "}
                <span className="block text-xs font-normal uppercase">
                  Annual Meeting
                </span>
              </p>
            </div>
            <Button size="sm" className="bg-cyan-600">
              View
            </Button>
          </div>

          <div className="flex items-center justify-between px-2 py-4">
            <div className="flex items-center justify-start gap-2">
              <div className="rounded-full bg-slate-100 p-2 shadow">
                <Image
                  src="/icons/link.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
              </div>
              <p className="mt-2 text-left font-sans font-semibold">
                Nov 17, 2023{" "}
                <span className="block text-xs font-normal uppercase">
                  Annual Meeting
                </span>
              </p>
            </div>
            <Button size="sm" className="bg-cyan-600">
              View
            </Button>
          </div>

          <div className="flex items-center justify-between border-t px-2 py-4 shadow">
            <div className="flex items-center justify-start gap-2">
              <div className="rounded-full bg-slate-100 p-2 shadow">
                <Image
                  src="/icons/link.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
              </div>
              <p className="mt-2 text-left font-sans font-semibold">
                Oct 21, 2022{" "}
                <span className="block text-xs font-normal uppercase">
                  Annual Meeting
                </span>
              </p>
            </div>
            <Button size="sm" className="bg-cyan-600">
              View
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocumentsPage;

{
  /* <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
  View Document
</button> */
}
