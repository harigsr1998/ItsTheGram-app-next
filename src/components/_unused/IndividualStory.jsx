import Image from "next/image";
import Link from "next/link";
import getData from "@/data/getDataWithoutAPI";

const IndividualStory = async ({ randomID }) => {
  const data = await getData();

  return (
    <Link
      href={"/"}
      key={data[randomID.id]}
      className="w-12 2xl:w-16 aspect-square rounded-full bg-green-400 outline outline-2 2xl:outline-4 2xl:outline-offset-4 outline-offset-2 outline-red-500 shrink-0 grow-0 align-middle"
    >
      <Image
        src={`/random_profile_pictures/${Math.floor(
          Math.random() * 198 + 1
        )}.jpg`}
        height={48}
        width={48}
        className="w-full h-full object-cover rounded-full"
      />
    </Link>
  );
};

export default IndividualStory;
