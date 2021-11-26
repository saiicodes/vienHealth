import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              href="/"
              className="flex text-3xl font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <span>Real Estate</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              quam?
            </p>
          </div>

          <div className="flex-grow grid grid-cols-3 flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 tracking-widest mb-3">
                About
              </h2>
              <nav className="list-none mb-10 text-lg">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Company
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Career
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
              </nav>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-gray-900 tracking-widest mb-3">
                Support
              </h2>
              <nav className="list-none mb-10 text-lg">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Cancellation Options
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Neighborhood Support
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Trust and Safety
                  </a>
                </li>
              </nav>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-gray-900 tracking-widest mb-3">
                Address
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, minus.
              </p>
              {/* icons */}
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-gray-100">
          <div className=" container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 Copyright:
              <a href="/" className="text-gray-600 ml-1">
                Bernard Sai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
