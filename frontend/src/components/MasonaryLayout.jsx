import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import { selectNote } from "../features/notes/noteSlice";
import NoteCard from "./NoteCard";
import { IoBookmark } from "react-icons/io5";
import NoteModal from "./NoteModal";

const breakPointsObj = {
  default: 4,
  3000: 5,
  2000: 4,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = () => {
  const { notes, bookmarkedNote } = useSelector(selectNote);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <NoteModal showModal={showModal} setShowModal={setShowModal} />
      )}
      {bookmarkedNote > 0 && (
        <div className="pt-5">
          <div className="ml-3 flex items-center">
            <span className="font-semibold text-lg text-gray-500">
              Bookmarked Notes
            </span>
          </div>
          <Masonry
            className="flex pt-3 animate-slide-fwd"
            breakpointCols={breakPointsObj}
          >
            {notes?.map((note) =>
              note?.isBookmarked ? (
                <NoteCard
                  showModal={showModal}
                  setShowModal={setShowModal}
                  key={note._id}
                  note={note}
                />
              ) : null
            )}
          </Masonry>
        </div>
      )}
      <div className={`${bookmarkedNote > 0 && "mt-8"} `}>
        {bookmarkedNote > 0 && (
          <span className="font-semibold text-lg ml-3 pt-20 text-gray-500">
            Other Notes
          </span>
        )}
        <Masonry
          className="flex pt-3 animate-slide-fwd "
          breakpointCols={breakPointsObj}
        >
          {notes?.map(
            (note) =>
              !note.isBookmarked && (
                <NoteCard
                  showModal={showModal}
                  setShowModal={setShowModal}
                  key={note._id}
                  note={note}
                />
              )
          )}
        </Masonry>
      </div>
      <button
        type="button"
        onClick={() => setShowModal(!showModal)}
        className="fixed bottom-[50px] right-[50px] md:bottom-[70px] md:right-[180px] bg-blue-500 p-4 cursor-pointer transition-all duration-200 ease-linear hover:bg-blue-600  rounded-full"
      >
        <HiOutlinePlus className=" stroke-current text-3xl text-white font-semibold" />
      </button>
    </>
  );
};

export default MasonryLayout;
