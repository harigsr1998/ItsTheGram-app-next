import { HiPlusCircle } from "react-icons/hi";
import AvatarImage from "./AvatarImage";

const Avatar = ({ page, user }) => {
  return (
    <div
      className={`aspect-square ${page === "sidebar" && "rounded-full sm:w-16 xl:w-12 2xl:w-16"} ${page === "post" && "w-10 shrink-0 grow-0 sm:w-12 xl:w-10 2xl:w-12"} ${page === "chat" && "h-7 content-center sm:h-11 xl:h-7 2xl:h-11"} ${page === "stories" && "relative w-12 shrink-0 grow-0 rounded-full bg-green-400 sm:w-16 xl:w-12 2xl:w-16"} ${page === "settings" && "mx-auto my-2 w-16 shrink-0 grow-0 rounded-full sm:my-4 sm:w-24 xl:my-2 xl:w-16 2xl:my-4 2xl:w-24"}`}
    >
      <AvatarImage user={user} />
      {page === "stories" && (
        <HiPlusCircle className="absolute bottom-0 right-0 size-5 rounded-full bg-white fill-blue-500 sm:size-7 xl:size-5 2xl:size-6" />
      )}
    </div>
  );
};

export default Avatar;
