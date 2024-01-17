

export default function Footer() {
  return (
    <footer className={`bg-black`} id="footer">
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="grid md:grid-cols-2 md:mt-0 mt-10 gap-y-10">
            <div>
              <h2 className={` mb-6 text-sm text-white uppercase font-[700]`}>About</h2>
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
              <h2 className={`mb-6 text-sm text-white uppercase font-[700]`}>Service</h2>
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
          <div className="md:text-right text-center md:mt-0 mt-10">
            <h2 className="mb-5 text-white">
              Starting a new project or want to
              <br /> collaborate with us?
            </h2>
            <button className="ml-5 btn bg-primaryOrange text-white rounded-3xl text-xl uppercase px-5 py-2 hover:opacity-80 font-[700]">New Project</button>
            <div className="mt-5">
              <span className="text-primaryOrange mr-5">sixteenarchive.id@gmail.com</span>
              0812-4646-0825
            </div>
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
