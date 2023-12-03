import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#0F0F0F]">
        <section className="relative header-background" id="header">
          <div className="max-w-screen-xl items-center justify-between mx-auto p-4">
            <div className="absolute mt-5 top-1/2 -translate-y-1/2 ">
              <div className={`text-2xl mb-3`} style={{ fontWeight: 500 }}>
                Generate Your Vision
              </div>
              <p
                className={`-m-1 text-7xl text-primaryOrange`}
                style={{ fontWeight: 700 }}
              >
                ALL OUTSTANDING <br />
                STORYTELLING STARTS
                <br />
                WITH GREAT CONTENT
              </p>
              <div className={`mt-6 text-2xl `} style={{ fontWeight: 500 }}>
                We help brands to effectively kept being engaged in digital
                landscape.
              </div>
              <div className={`bottom-0 flex mt-5`} style={{ fontWeight: 400 }}>
                <div className="w-auto bg-[#D9D9D9] text-black rounded-full px-5 py-2">
                  sixteenarchive.id@gmail.com
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="project">
          <div className="max-w-screen-xl items-center justify-between mx-auto relative border-y-2 border-primaryOrange ">
            <Image
              src="/images/background2.png"
              className={"w-full"}
              alt="bg-about"
              width={0}
              height={0}
            />
            <div className="absolute top-1/2 w-full -translate-y-1/2 text-center">
              <h1 className={` text-6xl text-white font-[700]`}>
                SIXTEEN ARCHIVE
              </h1>
              <div className="text-primaryOrange text-3xl tracking-[.30em]">
                IN THE MAKING
              </div>
              <div className="grid grid-cols-3 mt-32 px-24">
                <div className="border-r-2 border-primaryOrange">
                  <h1 className={`text-4xl text-white font-[700]`}>200+</h1>
                  <span className="uppercase">Project</span>
                </div>
                <div className="border-r-2 border-primaryOrange">
                  <h1 className={` text-4xl text-white font-[700]`}>80+</h1>
                  <span className="uppercase">Clients</span>
                </div>
                <div>
                  <h1 className={` text-4xl text-white font-[700]`}>2+</h1>
                  <span className="uppercase">Years</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="service">
          <div className="max-w-screen-xl items-center justify-between mx-auto px-4 py-14">
            Service
            <ul className="list-disc grid grid-cols-2 gap-5 mt-10">
              <li>
                <h1 className={`text-4xl text-white font-[700]`}>
                  WEBSITE DEVELOPMENT
                </h1>
                <div className="mt-5">
                  Website development is the process of creating, designing and
                  maintaining websites on the internet to create an appearance
                  and functionality that suits user needs.
                </div>
              </li>
              <li>
                <h1 className={`text-4xl text-white font-[700]`}>
                  DIGITAL MEDIA DESIGN
                </h1>
                <div className="mt-5">
                  Digital media design involves creating visual or graphic
                  content using digital technology. This includes graphic
                  design, animation, illustration, photography, video, and other
                  visual elements used in digital platforms such as websites,
                  apps, social media, and online marketing campaigns. The goal
                  is to convey a message, attract attention and interact with
                  the audience visually in a digital environment.
                </div>
              </li>
              <li>
                <h1 className={`text-4xl text-white font-[700]`}>
                  VIDEO & PHOTO PRODUCTION
                </h1>
                <div className="mt-5">
                  Brand identity design is the process of creating visual
                  elements that represent the unique identity and
                  characteristics of a brand. This includes logo design, color
                  selection, typography, graphic style, and other visual
                  elements used consistently to build a strong, recognizable
                  brand image. The goal is to differentiate the brand from
                  others, create an emotional connection with the audience, and
                  strengthen the brand's impression in the market.
                </div>
              </li>
              <li>
                <h1 className={`text-4xl text-white font-[700]`}>
                  CRYPTO DEVELOPMENT
                </h1>
                <div className="mt-5">
                  Crypto development involves the creation, design and
                  implementation of digital currency that uses cryptographic
                  technology. This includes blockchain creation, token
                  development, e-wallet creation, and creation of related
                  applications for trading, exchange, or other crypto uses. The
                  goal is to create secure, decentralized and innovative digital
                  financial solutions.
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="about-us">
          <div className="max-w-screen-xl items-center justify-between mx-auto py-24 relative border-y-2 border-primaryOrange ">
            <Image
              src="/images/bg-about.png"
              className={"w-full"}
              alt="bg-about"
              width={0}
              height={0}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className={` text-6xl text-primaryOrange mb-5 font-[700]`}>
                ABOUT US
              </h1>
              We are Sixteen Archive, was founded with the vision of
              revolutionizing the way businesses and brands communicate and
              connect with their audiences. We are a dynamic and innovative team
              of creative minds, passionate about bringing ideas to life and
              making a lasting impact. We understand that creativity knows no
              bounds, and that's why we strive to push the boundaries of
              imagination, design, and storytelling to create truly remarkable
              experiences.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
