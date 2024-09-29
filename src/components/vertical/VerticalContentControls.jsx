import getData from "@/data/getDataWithoutAPI";
import Image from "next/image";
import VerticalContentCaption from "./VerticalContentCaption";
import StoryVerticalControls from "./StoryVerticalControls";
import Link from "next/link";

const VerticalContentControls = async ({ page, dataParams }) => {
  const data = await getData();
  const dataID = Math.floor(Math.random() * 24);
  const ProfilePictureRandomizer = Math.floor(Math.random() * 198 + 1);

  return (
    <div
      className={`absolute bottom-0 left-0 flex h-full w-full ${page === "stories" ? "flex-col" : "flex-col-reverse"}`}
      id="IndividualVerticalContent Controls"
    >
      {page === "stories" && <StoryVerticalControls />}
      <Link
        href={{
          pathname: `/${
            dataParams ? dataParams.username : data[dataID].user.username
          }/profile`,
          query: {
            username: dataParams
              ? dataParams.username
              : data[dataID].user.username,
            full_name: dataParams
              ? dataParams.full_name
              : data[dataID].user.full_name,
            randomProfilePictureId: dataParams
              ? dataParams.randomProfilePictureId
              : ProfilePictureRandomizer,
          },
        }}
        className="flex shrink-0 grow-0 flex-col justify-end gap-1 bg-gradient-to-t from-black to-black/0 px-2 pb-2 pt-12 text-gray-200 sm:gap-3 sm:px-4 sm:pb-4 sm:text-xl xl:gap-2 xl:px-2 xl:pb-2 xl:text-sm 2xl:gap-4 2xl:px-4 2xl:pb-4 2xl:text-xl"
      >
        <p className="text-base text-white sm:text-2xl xl:text-base 2xl:text-2xl">
          {dataParams ? dataParams.full_name : data[dataID].user.full_name}
        </p>
        <p>@{dataParams ? dataParams.username : data[dataID].user.username}</p>
        {data[dataID].caption && (
          <VerticalContentCaption caption={data[dataID].caption.text} />
        )}
        <div className="h-9 w-9 shrink-0 grow-0 sm:h-14 sm:w-14 xl:h-9 xl:w-9 2xl:h-14 2xl:w-14">
          <Image
            src={`/random_profile_pictures/${
              dataParams
                ? dataParams.randomProfilePictureId
                : ProfilePictureRandomizer
            }.jpg`}
            height={56}
            width={56}
            className="aspect-square h-full w-full rounded-full object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default VerticalContentControls;
