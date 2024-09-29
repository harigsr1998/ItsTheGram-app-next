import Image from "next/image";
import Avatar from "../avatar/Avatar";

const IndividualMessage = ({
  commentItem,
  index1,
  index2,
  randomProfilePictureId,
}) => {
  const randomNo = Math.random() * 198;

  return (
    <div
      className={`mb-1 flex items-end gap-1 sm:gap-2 sm:mb-3 xl:mb-2 2xl:mb-3 ${
        randomNo > 98 && "flex-row-reverse"
      }`}
      key={[index1, index2]}
    >
      {randomNo > 98 ? (
        <div className="aspect-square h-7 content-center sm:h-11 xl:h-7 2xl:h-11">
          <Image
            src={`/random_profile_pictures/${randomProfilePictureId}.jpg`}
            height={44}
            width={44}
            className="rounded-full"
          />
        </div>
      ) : (
        <Avatar page="chat" />
      )}
      <div
        className={`max-w-[80%] content-center p-1 text-sm sm:p-2 sm:text-xl sm:font-medium xl:p-1 xl:text-sm xl:font-normal 2xl:p-2 2xl:text-xl 2xl:font-medium ${
          randomNo > 98
            ? "rounded-t-lg rounded-bl-lg bg-white 2xl:rounded-t-xl 2xl:rounded-bl-xl"
            : "rounded-t-lg rounded-br-lg bg-blue-500 2xl:rounded-t-xl 2xl:rounded-br-xl"
        }`}
      >
        {commentItem.text}
      </div>
    </div>
  );
};

export default IndividualMessage;
