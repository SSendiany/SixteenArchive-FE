"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Script from "next/script";
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  useEffect(() => {
    AOS.init();
    if (document) {
      // const iframe = document.getElementsByTagName("iframe");
      // const elmnt = iframe.contentWindow.document.getElementsByClassName("")[0];
    }
  }, [])
  

  return (
    <>

      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></Script>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#0F0F0F]">
        <section className="relative header-background" id="header">
          <div className="max-w-screen-xl h-screen items-center md:justify-between mx-auto p-4">
            <div className="md:absolute md:mt-5 md:top-1/2 mt-32 md:-translate-y-1/2">
              <div data-aos-delay="10" data-aos-duration="1000" data-aos="fade-right" className={`md:text-2xl md:text-left text-center md:mb-3 mb-[11vh]`} style={{ fontWeight: 500 }}>
                <span>Generate Your Vision
                <hr className="w-[30vw] mx-auto mt-[3vh] md:hidden"/>
                </span>
              </div>
              <p data-aos-delay="300" data-aos-duration="1000" data-aos="fade-right"
                className={`-m-1 2xl:text-7xl md:text-6xl text-[7vw] md:text-left text-center text-primaryOrange`}
                style={{ fontWeight: 700 }}
              >
                ALL OUTSTANDING <br className="md:block hidden" />
                STORYTELLING STARTS
                <br className="md:block hidden"/> WITH GREAT CONTENT
              </p>
              <div data-aos-delay="500" data-aos="fade-right" className={`mt-6 md:text-2xl md:text-left text-center`} style={{ fontWeight: 500 }}>
                Empowering brands to thrive in the ever-evolving digital realm.
              </div>
              <div className={`md:flex hidden mt-5`} style={{ fontWeight: 400 }}>
                <div data-aos-delay="700" data-aos="fade-right" className="w-auto bg-[#D9D9D9] text-black rounded-full px-5 py-2">
                  sixteenarchive.id@gmail.com
                </div>
              </div>
            </div>
              <div className={`md:hidden bottom-16 flex mt-5`} style={{ fontWeight: 400 }}>
                <div className="w-auto md:mt-0 mt-[25vh] xs:mt-[10vh] md:mx-0 mx-auto bg-[#D9D9D9] text-black rounded-full md:px-5 md:py-2 px-2 py-1 md:text-md text-sm">
                  sixteenarchive.id@gmail.com
                </div>
              </div>
          </div>
        </section>
        <section id="project">
          <div className="max-w-screen-xl items-center justify-between mx-auto relative border-y-2 border-primaryOrange">
            <Image
              src="/images/background2.png"
              className={"w-full md:h-auto h-screen md:object-none object-cover"}
              alt="bg-about"
              width={0}
              height={0}
            />
            <div className="absolute top-1/2 w-full -translate-y-1/2 text-center">
              <h1  data-aos="fade-right" className={`md:text-6xl text-4xl font-[700] text-white`}>
                SIXTEEN ARCHIVE
              </h1>
              <div  data-aos="fade-down" className="text-primaryOrange md:text-3xl text-2xl tracking-[.30em]">
                IN THE MAKING
              </div>
              <div data-aos="fade-in" className="grid md:grid-cols-3 mt-20 px-24">
                <div className="md:border-r-2 border-primaryOrange">
                  <h1 className={`text-4xl font-[700] text-white`}>200+</h1>
                  <span className="uppercase">Project</span>
                </div>
                <div className="md:hidden border-b-2 md:pb-0 pb-16 md:py-0 w-[15vw] mx-auto border-primaryOrange"></div>
                <div className="md:border-r-2 md:py-0 py-16 border-primaryOrange">
                  <h1 className={` text-4xl font-[700] text-white`}>80+</h1>
                  <span className="uppercase">Clients</span>
                </div>
                <div className="md:hidden border-b-2 md:pb-0 md:py-0 w-[15vw] mx-auto border-primaryOrange"></div>
                <div className="md:pt-0 pt-16">
                  <h1 className={` text-4xl font-[700] text-white`}>2+</h1>
                  <span className="uppercase">Years</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden" id="our-project">
          <div className="max-w-screen-xl items-center justify-between mx-auto text-center py-24 relative border-y-2 border-primaryOrange ">
            <h1 data-aos="fade-down" className={`md:text-6xl text-4xl mb-10 font-[700] text-primaryOrange`}>
                PROJECT
            </h1>
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
    >
      <SwiperSlide>
        <a target="_blank" href="https://merobiarthaputera.com/">
          <Image
            src="/images/merobi.png"
            className={"w-full object-cover rounded-2xl"}
            alt="project-merobi"
            width={0}
            height={0}
          />
        </a>
      </SwiperSlide>
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
      
          </div>
        </section>
        <section id="service">
          <div className="max-w-screen-xl items-center justify-between mx-auto px-4 py-14">
            <p data-aos="fade-in">Service</p>
            <ul className="md:list-disc grid md:grid-cols-2 gap-5 mt-10">
              <li data-aos="fade-down">
                <h1 className={`text-4xl font-[700] text-white`}>
                  WEBSITE DEVELOPMENT
                </h1>
                <div className="mt-5">
                  Website development is the process of creating, designing and
                  maintaining websites on the internet to create an appearance
                  and functionality that suits user needs.
                </div>
              </li>
              <li data-aos="fade-down" data-aos-delay="200" className="md:text-left text-right">
                <h1 className={`text-4xl font-[700] text-white`}>
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
              <li data-aos="fade-down" data-aos-delay="400" >
                <h1 className={`text-4xl font-[700] text-white`}>
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
              <li data-aos="fade-down" data-aos-delay="600" className="md:text-left text-right">
                <h1 className={`text-4xl font-[700] text-white`}>
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
        <section  id="our-client">
          <div className="max-w-screen-xl items-center justify-between mx-auto text-center py-24 relative border-y-2 border-primaryOrange ">
            {/* <Image
              src="/images/bg-about.png"
              className={"w-full"}
              alt="bg-about"
              width={0}
              height={0}
            /> */}

            <h1 data-aos="fade-in" className={`md:text-6xl text-4xl text-primaryOrange mb-10 font-[700]`}>
                OUR CLIENT
            </h1>
            <div data-aos="fade-in" className="grid lg:grid-cols-3 md:grid-cols-2 items-center">
            <motion.div className="xl:opacity-50" whileHover={{ opacity: 1 }}>
                <Image
              src="/images/client/Three Little Angel.png"
              className={"mx-auto w-48 object-cover"}
              alt="threelittleangel"
              width={0}
              height={0}
            />
              </motion.div>
               <motion.div className="xl:opacity-50" whileHover={{ opacity: 1 }}>
                <Image
              src="/images/client/SCW_Logo.png"
              className={"mx-auto w-48 object-cover"}
              alt="scw"
              width={0}
              height={0}
            />
              </motion.div>
               <motion.div className="xl:opacity-50" whileHover={{ opacity: 1 }}>
                <Image
              src="/images/client/logo_merobi.png"
              className={"mx-auto w-32 object-cover"}
              alt="merobi"
              width={0}
              height={0}
            />
              </motion.div>
               <motion.div className="xl:opacity-50" whileHover={{ opacity: 1 }}>
                <Image
              src="/images/client/Ekklesia.png"
              className={"mx-auto w-48 object-cover"}
              alt="ekklesia"
              width={0}
              height={0}
            />
              </motion.div>
               <motion.div className="xl:opacity-50" whileHover={{ opacity: 1 }}>
                <Image
              src="/images/client/Akademi-maritim-djajat.png"
              className={"mx-auto w-48 object-cover"}
              alt="akademimaritimdjajat"
              width={0}
              height={0}
            />
              </motion.div>
  
            </div>
            </div>
        </section>
        <section id="our-team">
          <div className="max-w-screen-xl items-center justify-between mx-auto text-center py-24 relative border-y-2 border-primaryOrange ">
            {/* <Image
              src="/images/bg-about.png"
              className={"w-full"}
              alt="bg-about"
              width={0}
              height={0}
            /> */}

              <h1 data-aos="fade-down" className={`md:text-6xl text-4xl mb-5 font-[700] text-primaryOrange`}>
                MEET OUR TEAM
            </h1>
            <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="grid md:grid-cols-4 gap-y-6 overflow-x-auto overflow-hidden mt-20">
                <div className="badge-base LI-profile-badge md:mx-0 mx-auto" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="laskarchristo" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://id.linkedin.com/in/laskarchristo?trk=profile-badge"></a></div>
                <div data-aos="zoom-in" data-aos-delay="300" className="badge-base LI-profile-badge md:mx-0 mx-auto" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="erlangga-fauzan-rezagani-7a3369180" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/erlangga-fauzan-rezagani-7a3369180?trk=profile-badge"></a></div>
                <div data-aos="zoom-in" data-aos-delay="500" className="badge-base LI-profile-badge md:mx-0 mx-auto" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="ssendiany" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://id.linkedin.com/in/ssendiany?trk=profile-badge"></a></div>
                <div data-aos="zoom-in" data-aos-delay="700" className="badge-base LI-profile-badge md:mx-0 mx-auto" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dimdarmawan" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/dimdarmawan?trk=profile-badge"></a></div>
              </div>
            </div>
        </section>
        <section id="about-us">
          <div className="max-w-screen-xl items-center justify-between mx-auto py-24 relative border-y-2 border-primaryOrange ">
            <Image
              src="/images/bg-about.png"
              className={"w-full md:h-auto h-screen"}
              alt="bg-about"
              width={0}
              height={0}
            />
            <div className="absolute top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 text-center">
              <h1 data-aos="fade-in" data-aos-delay="100" className={`md:text-6xl text-4xl mb-5 font-[700] text-white`}>
                ABOUT US
              </h1>
              <p data-aos="fade-in" data-aos-delay="100" className="md:text-md text-sm md:mx-0 mx-10 md:text-center text-justify text-white">
              We are Sixteen Archive, was founded with the vision of
              revolutionizing the way businesses and brands communicate and
              connect with their audiences. We are a dynamic and innovative team
              of creative minds, passionate about bringing ideas to life and
              making a lasting impact. We understand that creativity knows no
              bounds, and that's why we strive to push the boundaries of
              imagination, design, and storytelling to create truly remarkable
              experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
