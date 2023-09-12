import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
const MetropolisBlack = localFont({src: './fonts/Metropolis-Black.otf'})


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#0F0F0F]">
        <section className="relative header-background" id="header" >
          <div className="max-w-screen-xl items-center justify-between mx-auto p-4">
            <div className="absolute top-1/2 -translate-y-1/2 ">
              <div className="text-2xl mb-3">Generate Our Vision</div>
              <p
                className={`${MetropolisBlack.className} -m-1 text-7xl text-primaryOrange`}
              >ALL OUTSTANDING <br />STORYTELLING STARTS<br />WITH GREAT CONTENT
              </p>
              <div className="mt-6 text-lg">
                We help brands to effectively kept being engaged in digital
                landscape.
              </div>
              <div className="bottom-0">
                <span>creativeinsight.id@gmail.com</span>
                <span></span>
              </div>
            </div>
          </div>
        </section>
        <section id="about-us">
          <div className="max-w-screen-xl items-center justify-between mx-auto px-4 py-24 relative border-y-2 border-primaryOrange ">
            <Image
              src="/images/bg-about.png"
              className={"w-full"}
              alt="bg-about"
              width={0}
              height={0}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1
                className={`${MetropolisBlack.className} text-6xl text-primaryOrange mb-10`}
              >
                ABOUT US
              </h1>
              We are Creative Insight, was founded with the vision of
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
        <section id="service">
          <div className="max-w-screen-xl items-center justify-between mx-auto px-4 border-b-2 border-primaryOrange mb-10">
            Service
            <ul className="list-disc two-column-list">
              <li>
                <h1 className={`${MetropolisBlack.className}`}>
                  WEBSITE DEVELOPMENT
                </h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </li>
              <li>
                <h1 className={`${MetropolisBlack.className}`}>
                  BRAND IDENTITY DESIGN
                </h1>
              </li>
              <li>
                <h1 className={`${MetropolisBlack.className}`}>
                  CRYPTO DEVELOPMENT
                </h1>
              </li>
              <li>
                <h1 className={`${MetropolisBlack.className}`}>
                  DIGITAL MEDIA DESIGN
                </h1>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
