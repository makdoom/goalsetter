import { HiOutlineBookmark } from "react-icons/hi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import NoteModal from "./NoteModal";
import { useState } from "react";
import { deleteNote } from "../features/notes/noteSlice";
import { useDispatch } from "react-redux";

const NoteCard = ({ note }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Date formatting
  const createdAt = new Date(note.createdAt);
  let date = `${createdAt.getDate()} ${createdAt.toLocaleString("default", {
    month: "short",
  })} ${createdAt.getFullYear()}`;

  const updateNote = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <NoteModal
          currentNote={note}
          isUpdate={true}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div className="shadow-sm bg-white m-3 my-8 p-5 rounded-lg cursor-pointer transition-all duration-200 ease-linear hover:scale-105 hover:shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-medium">{note.title}</div>
          <HiOutlineBookmark className="stroke-current text-blue-400 text-lg transition-all duration-200 ease-linear hover:text-blue-500 cursor-pointer hover:scale-110" />
        </div>
        <p className="text-gray-600 text-base">{note.description}</p>
        <div className="mt-7 flex justify-between items-center">
          <div className="bg-blue-100 p-2 rounded-lg text-xs text-blue-600 font-medium">
            {date}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div
              onClick={updateNote}
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              <FiEdit2 fontSize={16} />
            </div>
            <div
              onClick={() => dispatch(deleteNote(note._id))}
              className="p-2 bg-red-200 text-red-500 font-semibold rounded-lg"
            >
              <AiOutlineDelete fontSize={16} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NoteCard;
