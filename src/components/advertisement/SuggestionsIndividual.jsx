import Image from "next/image";
import Link from "next/link";
import getData from "@/data/getDataWithoutAPI";
import FollowButton from "../FollowButton";

const SuggestionsIndividual = async ({ dataItem, index }) => {
  const data = await getData();
  const randomUserId = Math.floor(Math.random() * 4);
  const randomProfilePictureId = Math.floor(Math.random() * 198 + 1);

  return (
    <>
      <div className="flex items-center text-xs 2xl:text-base w-[80%]">
        <Link
          href={{
            pathname: `/${dataItem.comments.data[randomUserId].from.username}/profile`,
            query: {
              username: dataItem.comments.data[randomUserId].from.username,
              full_name: dataItem.comments.data[randomUserId].from.full_name,
              randomProfilePictureId: randomProfilePictureId,
            },
          }}
          prefetch={false}
          className="rounded-full aspect-square bg-red-700 w-10 2xl:w-12 shrink-0 grow-0"
        >
          <Image
            src={`/random_profile_pictures/${randomProfilePictureId}.jpg`}
            height={48}
            width={48}
            className="w-full h-full object-cover rounded-full"
          />
        </Link>
        <div className="px-2 w-full truncate">
          <Link
            href={{
              pathname: `/${dataItem.comments.data[randomUserId].from.username}/profile`,
              query: {
                username: dataItem.comments.data[randomUserId].from.username,
                full_name: dataItem.comments.data[randomUserId].from.full_name,
                randomProfilePictureId: randomProfilePictureId,
              },
            }}
            prefetch={false}
            className="font-semibold"
          >
            {dataItem.comments.data[randomUserId].from.username}
          </Link>
          <p className="text-gray-400 truncate">
            Followed by {data[index].likes.data[randomUserId].username} and +
            {Math.floor(Math.random() * 10) + 1} more
          </p>
        </div>
      </div>
      <FollowButton />
    </>
  );
};

export default SuggestionsIndividual;
