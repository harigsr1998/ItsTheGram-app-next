import Image from "next/image";
import Link from "next/link";

const IndividualMessageHeader = ({
  randomProfilePictureId,
  full_name,
  username,
}) => {
  return (
    <Link
      href={{
        pathname: `/${username}/profile`,
        query: {
          username,
          full_name,
          randomProfilePictureId,
        },
      }}
      className="flex cursor-pointer items-center gap-2 2xl:gap-3"
    >
      <Image
        src={`/random_profile_pictures/${randomProfilePictureId}.jpg`}
        height={56}
        width={56}
        className="aspect-square w-10 shrink-0 grow-0 rounded-full sm:w-14 xl:w-10 2xl:w-14"
      />
      <div className="flex flex-col justify-center text-sm font-semibold sm:text-xl xl:text-sm 2xl:text-xl">
        <p>{full_name}</p>
        <p className="text-xs text-gray-400 sm:text-lg xl:text-xs 2xl:text-lg">
          {username}
        </p>
      </div>
    </Link>
  );
};

export default IndividualMessageHeader;
