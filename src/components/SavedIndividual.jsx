"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBookmark, HiOutlineShare } from "react-icons/hi2";

const SavedIndividual = ({ individualItem }) => {
  const [display, setDisplay] = useState(true);
  const randomProfilePictureId = Math.floor(Math.random() * 198 + 1);

  return (
    <div
      className={`flex aspect-[2/1] gap-2 rounded-md border-2 p-2 ${
        display ? "block" : "hidden"
      }`}
    >
      <Image
        src={`https://picsum.photos/200/200?random=${Math.floor(
          Math.random() * 1000,
        )}`}
        width={200}
        height={200}
        className="h-full w-[50%] rounded-md object-cover"
        key={individualItem.id}
      />
      <div className="flex w-[50%] flex-col justify-between overflow-hidden">
        <Link
          href={{
            pathname: `/${individualItem.comments.data[0].from.username}/profile`,
            query: {
              username: individualItem.comments.data[0].from.username,
              full_name: individualItem.comments.data[0].from.full_name,
              randomProfilePictureId: randomProfilePictureId,
            },
          }}
          prefetch={false}
        >
          <Image
            src={`/random_profile_pictures/${randomProfilePictureId}.jpg`}
            height={32}
            width={32}
            className="mx-auto rounded-full sm:h-10 sm:w-10 xl:mb-2 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10"
          />
          <div className="text-center sm:text-sm xl:text-xs 2xl:text-sm [&>*]:overflow-hidden">
            <p className="font-semibold sm:max-h-10 xl:max-h-8 2xl:max-h-10">
              {individualItem.comments.data[0].from.full_name}
            </p>
            <p className="text-gray-400 sm:max-h-5 xl:max-h-4 2xl:max-h-5">
              @{individualItem.comments.data[0].from.username}
            </p>
          </div>
        </Link>

        <div className="flex justify-center sm:gap-4 xl:gap-2">
          <HiOutlineShare className="sm:size-6 xl:size-4 2xl:size-5" />
          <HiBookmark
            className="cursor-pointer sm:size-6 xl:size-4 2xl:size-5"
            onClick={() => setDisplay(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SavedIndividual;
