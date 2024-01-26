import Documents from "@/components/shared/Documents"
import Events from "@/components/shared/Events"
import Header from "@/components/shared/Header"
import Hero from "@/components/shared/Hero"
import Members from "@/components/shared/Members"


const page = () => {
  return (
    <div>
        <Header />
        <Hero />


        <Events />
        <Documents />
        <Members  />



{/*
          <section className="bg-white h-32">
            <div className="absolute -right-32 bottom-0">
                <Image
                  src="/images/blob-haikei.png"
                  alt="blob"
                  height={250}
                  width={250}
                  className="opacity-30"
                />
              </div>
              <div className="absolute top-32 -left-40 rotate-90">
                <Image
                  src="/images/blob-haikei-2.png"
                  alt="blob"
                  height={400}
                  width={400}
                  className="opacity-50"
                />
              </div>
          </section> */}
    </div>
  )
}

export default page
