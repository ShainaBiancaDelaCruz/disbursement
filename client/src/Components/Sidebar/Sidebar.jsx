import React from 'react';
import { FaRocket, FaElementor, FaWpforms, FaShoppingCart, FaCompass, FaLifeRing } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-72 bg-grey dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-start mx-6 mt-10">
              <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
                HR HERBS
              </span>
            </div>
            <nav className="mt-10 px-6">
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                href="#"
              >
                <FaElementor className="h-6 w-6" />
                <span className="mx-4 text-lg font-normal">Page 1</span>
                <span className="flex-grow text-right"></span>
              </a>
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                href="#"
              >
                <FaWpforms className="h-6 w-6" />
                <span className="mx-4 text-lg font-normal">Form</span>
                <span className="flex-grow text-right"></span>
              </a>
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                href="#"
              >
                <FaShoppingCart className="h-6 w-6" />
                <span className="mx-4 text-lg font-normal">Page 3</span>
                <span className="flex-grow text-right">
                  <button
                    type="button"
                    className="w-6 h-6 text-xs rounded-full text-white bg-red-500"
                  >
                    <span className="p-1">7</span>
                  </button>
                </span>
              </a>
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                href="#"
              >
                <FaCompass className="h-6 w-6" />
                <span className="mx-4 text-lg font-normal">Navigation</span>
                <span className="flex-grow text-right"></span>
              </a>
            </nav>
          </div>
          <div className="my-10">
            <a
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8"
              href="#"
            >
              <CiLogout className="h-5 w-5" />
              <span className="mx-4 font-medium">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
