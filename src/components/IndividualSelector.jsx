import { IoCameraOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import getData from "@/data/getDataWithoutAPI";

const IndividualSelector = async ({ dataID, commentID, page, children }) => {
  const mainData = await getData();
  const randomProfilePictureId = Math.floor(Math.random() * 198 + 1);

  return (
    <div
      className={`${
        page !== "storiesbar" && "flex shrink-0 p-1 align-middle 2xl:p-2"
      } ${page === "explore" && "gap-2 rounded-full bg-gray-200 sm:gap-3 xl:gap-2"} ${
        page === "chat" &&
        "mb-1 w-full justify-between bg-white hover:bg-gray-200"
      } ${
        page === "storiesbar" &&
        "aspect-square w-12 shrink-0 grow-0 rounded-full bg-green-400 outline outline-2 outline-offset-2 outline-red-500 sm:w-16 sm:outline-4 sm:outline-offset-4 xl:w-12 xl:outline-2 xl:outline-offset-2 2xl:w-16 2xl:outline-4 2xl:outline-offset-4"
      }`}
    >
      <Link
        href={{
          pathname:
            (page === "explore" &&
              `/${mainData[dataID].comments.data[commentID].from.username}/profile`) ||
            (page === "chat" && `/chats/${mainData[dataID].user.username}/`) ||
            (page === "storiesbar" &&
              `/${mainData[dataID].user.username}/stories`),
          query: {
            username:
              page === "explore"
                ? `${mainData[dataID].comments.data[commentID].from.username}`
                : `${mainData[dataID].user.username}`,
            full_name:
              page === "explore"
                ? `${mainData[dataID].comments.data[commentID].from.full_name}`
                : `${mainData[dataID].user.full_name}`,
            randomProfilePictureId: randomProfilePictureId,
          },
        }}
        prefetch={(page === "explore" || page === "storiesbar") && false}
        className={page !== "storiesbar" && "flex gap-2"}
      >
        <Image
          src={`/random_profile_pictures/${randomProfilePictureId}.jpg`}
          height={48}
          width={48}
          className={` ${
            page === "storiesbar"
              ? "h-full w-full rounded-full object-cover"
              : "h-12 w-12 rounded-full bg-green-400 sm:h-12 sm:w-12 xl:h-8 xl:w-8 2xl:h-12 2xl:w-12"
          }`}
        />
        {page !== "storiesbar" && (
          <div className="text-base xl:text-xs 2xl:text-base">
            <p className="h-6 font-semibold sm:h-6 xl:h-4 2xl:h-6">
              {page === "explore" &&
                mainData[dataID].comments.data[commentID].from.full_name}
              {page === "chat" && mainData[dataID].user.full_name}
            </p>
            <p
              className={`h-6 text-gray-400 sm:h-6 xl:h-4 2xl:h-6 ${
                page !== "explore" && "overflow-hidden"
              }`}
            >
              {page === "explore" &&
                `@${mainData[dataID].comments.data[commentID].from.username}`}
              {page === "chat" &&
                mainData[dataID].caption &&
                mainData[dataID].caption.text}
            </p>
          </div>
        )}
      </Link>
      {children}
      {page === "chat" && (
        <IoCameraOutline className="mt-1 size-10 shrink-0 grow-0 text-gray-400 sm:size-10 xl:size-6 2xl:size-10" />
      )}
    </div>
  );
};

export default IndividualSelector;
