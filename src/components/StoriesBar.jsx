import { RxCaretRight } from "react-icons/rx";
import Avatar from "./avatar/Avatar";
import dynamic from "next/dynamic";

const IndividualSelector = dynamic(
  () => import("@/components/IndividualSelector"),
  {
    ssr: false,
  },
);

const StoriesBar = () => {
  const randomID = Math.floor(Math.random() * 24);
  const stories = [];
  for (let index = 0; index < randomID; index++) {
    stories.push(
      <IndividualSelector page="storiesbar" key={index} dataID={index} />,
    );
  }

  return (
    <div className="relative">
      <div className="noScrollBar flex w-full gap-4 overflow-x-scroll bg-white p-3 sm:gap-6 sm:rounded-lg sm:p-6 2xl:rounded-xl">
        <Avatar page="stories" />
        {stories}
        <div className="absolute right-4 top-7 h-5 w-5 cursor-pointer rounded-full bg-white shadow-spread transition-all duration-200 hover:scale-110 sm:top-11 sm:h-8 sm:w-8 xl:top-10 xl:h-5 xl:w-5 2xl:top-11 2xl:h-6 2xl:w-6">
          <RxCaretRight
            strokeWidth={1}
            className="size-5 content-center sm:size-8 xl:size-5 2xl:size-6"
          />
        </div>
      </div>
    </div>
  );
};

export default StoriesBar;
