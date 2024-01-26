import { Input } from "../ui/input"
// import { playfair_display } from "@/lib/fonts"

const Documents = () => {
  return (

    <div className="bg-[url('/images/neighborhood.jpg')] bg-cover bg-center bg-fixed bg-stone-800 bg-blend-overlay">
        <div className="py-48">
            <div className="w-full">
                <h2 className="font-playfair text-stone-100 text-4xl md:text-5xl text-center mb-4 font-bold">HOA Documents</h2>
                <div className="underline w-[200px] bg-cyan-600 mx-auto"></div>
                <p className="font-sans text-stone-100 text-center mb-8 mt-4 tracking-wide max-w-sm mx-auto">Enter your password below to access the documents page</p>
            </div>
            <div>
                <Input type="password" placeholder="Enter your password" className="w-72 mx-auto" />
            </div>
        </div>

    </div>

  )
}

export default Documents
