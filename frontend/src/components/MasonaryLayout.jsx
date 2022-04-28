import Masonry from "react-masonry-css";
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
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakPointsObj}>
      {/* {pins?.map((pin) => (
          <Pin key={pin._id} pin={pin} className="w-max" />
        ))} */}
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </Masonry>
  );
};

export default MasonryLayout;
