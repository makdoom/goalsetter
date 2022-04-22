import MasonryLayout from "../components/MasonaryLayout";
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" relative w-full px-8 xl:px-48 my-4 min-h-[88vh]">
      <MasonryLayout />

      {showModal && (
        <div className="transition-all duration-200 ease-linear flex justify-center items-center h-screen fixed top-0 right-0 left-0 z-50 w-full bg-gray-300 bg-opacity-50">
          <div class="transition-all duration-200 ease-linear relative p-4 w-full max-w-xl h-auto">
            <div class=" relative bg-white rounded-xl shadow-lg ">
              <div class="flex justify-between items-start  p-5 rounded-t border-b border-gray-100 ">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
                  Add Note
                </h3>
                <button
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                  class="text-gray-400 bg-transparent hover:bg-gray-200 transition-all duration-200 ease-linear hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
                >
                  <HiOutlineX fontSize={25} />
                </button>
              </div>
              <div class="p-6 px-8 space-y-5">
                <div className="mb-2 w-full">
                  <label className="mb-2 text-gray-500" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
                  />
                </div>
                <div className="mb-2 w-full">
                  <label className="mb-1 text-gray-500" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor  rounded-lg outline-none resize-none"
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div class="flex justify-center items-center p-6 space-x-2 rounded-b border-gray-200 ">
                <button
                  type="button"
                  class="text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-linear  focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center  "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowModal(!showModal)}
        className="fixed bottom-[50px] right-[50px] md:bottom-[70px] md:right-[180px] bg-blue-500 p-4 cursor-pointer transition-all duration-200 ease-linear hover:bg-blue-600  rounded-full"
      >
        <HiOutlinePlus className=" stroke-current text-3xl text-white font-semibold" />
      </button>
    </div>
  );
};
export default Dashboard;
