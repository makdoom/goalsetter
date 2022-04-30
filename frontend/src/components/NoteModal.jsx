import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { createNote, selectNote } from "../features/notes/noteSlice";
import ButtonSpinner from "./ButtonSpinner";

const NoteModal = ({ showModal, setShowModal }) => {
  const [note, setNote] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const { isLoading: loading } = useSelector(selectNote);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNote(note));
    setNote({ title: "", description: "" });
    setShowModal(false);
  };
  return (
    <div className="transition-all duration-200 ease-linear flex justify-center items-center h-screen fixed top-0 right-0 left-0 z-[99999] w-full bg-gray-300 bg-opacity-50">
      <div className="transition-all duration-200 ease-linear relative p-4 w-full max-w-xl h-auto">
        <form
          onSubmit={submitHandler}
          className=" relative bg-white rounded-xl shadow-lg "
        >
          <div className="flex justify-between items-start  p-5 rounded-t border-b border-gray-100 ">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl ">
              Add Note
            </h3>
            <button
              type="button"
              onClick={() => setShowModal(!showModal)}
              className="text-gray-400 rounded-full bg-transparent hover:bg-gray-200 transition-all duration-200 ease-linear hover:text-gray-900  text-sm p-1.5 ml-auto inline-flex items-center  "
            >
              <HiOutlineX fontSize={25} />
            </button>
          </div>
          <div className="p-6 px-8 space-y-5">
            <div className="mb-2 w-full">
              <label className="mb-2 text-gray-500" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
              />
            </div>
            <div className="mb-2 w-full">
              <label className="mb-1 text-gray-500" htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                value={note.description}
                onChange={(e) =>
                  setNote({ ...note, description: e.target.value })
                }
                className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor  rounded-lg outline-none resize-none"
                cols="30"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center p-6 space-x-2 rounded-b border-gray-200 ">
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-linear  focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center  "
            >
              Submit
              {loading && <ButtonSpinner />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NoteModal;
