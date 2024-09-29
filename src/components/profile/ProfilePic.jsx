import Image from "next/image";

const ProfilePic = ({ search_Params }) => {
  return (
    <div className="mx-auto my-3 aspect-square w-20 shrink-0 grow-0 rounded-full sm:my-4 sm:w-24 xl:my-2 xl:w-16 2xl:my-4 2xl:w-24">
      {search_Params.randomProfilePictureId ? (
        <Image
          src={`/random_profile_pictures/${search_Params.randomProfilePictureId}.jpg`}
          height={96}
          width={96}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <Image
          src={`/random_profile_pictures/${Math.floor(
            Math.random() * 198 + 1,
          )}.jpg`}
          height={96}
          width={96}
          className="h-full w-full rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default ProfilePic;
