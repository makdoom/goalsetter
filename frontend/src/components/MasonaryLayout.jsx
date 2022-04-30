import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import { selectNote } from "../features/notes/noteSlice";
import NoteCard from "./NoteCard";

const breakPointsObj = {
  default: 4,
  3000: 5,
  2000: 4,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = () => {
  const { notes } = useSelector(selectNote);
  const dispatch = useDispatch();
  console.log(notes);

  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakPointsObj}>
      {notes?.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
