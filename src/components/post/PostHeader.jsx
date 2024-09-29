import Image from "next/image";
import PostHeaderBookmark from "./PostHeaderBookmark";
import Link from "next/link";

const PostHeader = ({ user, location, user_has_bookmarked }) => {
  const randomProfilePictureId = Math.floor(Math.random() * 198 + 1);

  return (
    <div className="flex h-10 w-full justify-between text-sm sm:h-12 sm:text-base xl:h-10 xl:text-xs 2xl:h-12 2xl:text-base">
      <Link
        href={{
          pathname: `/${user.username}/profile`,
          query: {
            username: user.username,
            full_name: user.full_name,
            randomProfilePictureId: randomProfilePictureId,
          },
        }}
        className="flex cursor-pointer"
      >
        <div className="aspect-square w-10 sm:w-12 xl:w-10 2xl:w-12">
          <Image
            src={`/random_profile_pictures/${randomProfilePictureId}.jpg`}
            height={48}
            width={48}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="content-center pl-2">
          <p className="sh-5 font-bold xl:h-4 2xl:h-5">{user.username}</p>
          <p className="h-5 text-gray-400 xl:h-4 2xl:h-5">
            {location && location.name}
          </p>
        </div>
      </Link>
      <PostHeaderBookmark user_has_bookmarked={user_has_bookmarked} />
    </div>
  );
};

export default PostHeader;
