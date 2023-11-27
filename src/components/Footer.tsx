import localFont from "next/font/local";
const MetropolisBlack = localFont({ src: '../app/fonts/Metropolis-Black.otf' })

export default function Footer() {
  return (
    <footer className={`${MetropolisBlack.className} bg-black`} id="footer">
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="grid grid-cols-2 ">
            <div>
              <h2 className={` mb-6 text-sm text-white uppercase`}>About</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`mb-6 text-sm text-white uppercase`}>Service</h2>
              <div className="md:flex md:justify-between"></div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Indentity Design
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Website Development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Digital Media Design
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-right">
            <h2>
              Starting a new project or want to
              <br /> collaborate with us?
            </h2>
            Click here
            <button className="">New Project</button>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 bg-[#0F0F0F] flex">
        <span className="text-sm text-white text-center mx-auto">
          CC 2023.@SIXTEENARCHIVE
        </span>
      </div>
    </footer>
  );
}
