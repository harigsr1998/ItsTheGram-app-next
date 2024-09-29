import { PiPaperPlaneTiltBold, PiShareFatBold } from "react-icons/pi";
import Link from "next/link";
import FollowButton from "@/components/FollowButton";

const ButtonsBar = ({ search_Params }) => {
  return (
    <div
      className={`mx-auto mt-3 flex h-10 shrink-0 grow-0 justify-center gap-3 text-lg font-bold sm:mt-4 sm:h-14 sm:gap-6 sm:text-xl xl:mt-2 xl:h-10 xl:gap-4 xl:text-base 2xl:mb-2 2xl:mt-4 2xl:h-14 2xl:gap-6 2xl:text-xl [&>*]:content-center [&>*]:rounded-full ${
        !search_Params &&
        "[&>*]:bg-gray-200 [&>*]:px-3 [&>*]:sm:px-4 [&>*]:xl:px-3 [&>*]:2xl:px-4"
      }`}
    >
      {search_Params ? (
        <>
          <FollowButton page="profile" />
          <Link
            href={{
              pathname: `/chats/${search_Params.username}`,
              query: {
                username: search_Params.username,
                full_name: search_Params.full_name,
                randomProfilePictureId: search_Params.randomProfilePictureId,
              },
            }}
            className="aspect-square shrink-0 grow-0 rounded-full bg-gray-200 [&>*]:mx-auto"
          >
            <PiPaperPlaneTiltBold className="size-5 sm:size-7 xl:size-6 2xl:size-7" />
          </Link>
          <div className="aspect-square shrink-0 grow-0 rounded-full bg-gray-200 [&>*]:mx-auto">
            <PiShareFatBold className="size-5 sm:size-7 xl:size-6 2xl:size-7" />
          </div>
        </>
      ) : (
        <>
          <div>Edit Profile</div>
          <div>Share Profile</div>
        </>
      )}
    </div>
  );
};

export default ButtonsBar;
