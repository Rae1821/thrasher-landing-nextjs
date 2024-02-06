import Image from "next/image"
import { Separator } from "../ui/separator"
import Header from "./Header"


const DocumentsPage = () => {

  return (
    <div>
        <Header />
        <Separator />
        <main className="p-4 min-h-screen">
          <div className="flex flex-col justify-center items-center my-8">
            <h1 className="text-3xl font-playfair font-semibold tracking-wide">HOA Documents</h1>
              <p className="font-sans text-sm mt-2 max-w-md text-center">Click on each link to view, print, or download the documents.</p>
          </div>

          <div className="flex flex-col gap-8 justify-center items-center mt-12">
              <h2 className="text-2xl font-playfair font-semibold mb-8">Main Documents</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="border py-8 px-4 rounded-xl shadow-lg text-center h-56 w-72">
                  <Image
                    src="/icons/document.svg"
                    alt="document"
                    height={30}
                    width={30}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold tracking-wider uppercase mt-2 text-sm">The Covenant</h3>
                  <p className="text-sm mt-2 w-64 mb-6">Rules & regulations for Thrasher Landing</p>
                  <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-neutarl-700 transition duration-200 text-xs shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                    View Document
                  </button>
                </div>

                <div className="border py-8 px-4 text-center rounded-xl shadow-lg h-56 w-72">
                  <Image
                    src="/icons/document.svg"
                    alt="document"
                    height={32}
                    width={32}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold tracking-wider uppercase mt-2 text-sm">The Covenant Amendment</h3>
                  <p className="text-sm mt-2 w-64 text-center mb-6">Rules & regulations for Thrasher Landing</p>
                  <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-neutarl-700 transition duration-200 text-xs shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                    View Document
                  </button>
                </div>

                <div className="border py-8 px-4 rounded-xl shadow-lg text-center h-56 w-72">
                  <Image
                    src="/icons/document.svg"
                    alt="document"
                    height={32}
                    width={32}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold tracking-wider uppercase mt-2 text-sm text-center">The Bi-Laws</h3>
                  <p className="text-sm mt-2 w-64 text-center mb-6">Rules & regulations for Thrasher Landing</p>
                  <button className="px-8 py-0.5  border-2 border-cyan-600 dark:border-white uppercase bg-white text-neutarl-700 transition duration-200 text-xs shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                    View Document
                  </button>
                </div>
              </div>

          </div>

          <div className="text-center rounded-xl w-72 pt-4 pb-8 shadow-md">
              <h3 className="text-xl font-semibold pb-2">HOA Meeting Minutes</h3>
              <Separator />
              <p className="font-light mt-2">Meeting 1/1/2021</p>
              <p className="font-light mt-2">Meeting 2/2/2023</p>
            </div>
        </main>
    </div>

  )
}

export default DocumentsPage


{/* <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
  View Document
</button> */}