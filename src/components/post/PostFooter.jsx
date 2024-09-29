"use client";

import { useEffect, useState } from "react";
import PostFooterLike from "./PostFooterLike";
import Link from "next/link";
import Avatar from "../avatar/Avatar";
import dynamic from "next/dynamic";

const PostFooter = ({ likes, caption, createdTime, user_has_liked, index }) => {
  const [viewMore, setViewMore] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const randomUserId = Math.floor(Math.random() * 4);
  const randomUsername = likes.data[randomUserId].username;
  // const postDate = new Date(parseInt(createdTime));

  const postDate = dynamic(
    () => new Date(parseInt(createdTime)).toLocaleTimeString(),
    {
      ssr: false,
    },
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="text-sm sm:px-1 sm:text-base xl:text-xs 2xl:text-base">
      <div className="flex justify-between font-medium 2xl:font-semibold">
        <div className="flex w-[80%] flex-col gap-1">
          <p>
            Liked by{" "}
            {isClient && (
              <Link
                href={{
                  pathname: `/${randomUsername}/profile`,
                  query: { randomUserId: randomUserId, index: index },
                }}
                className="font-bold"
              >
                {randomUsername}
              </Link>
            )}{" "}
            and <span className="font-bold">{likes.count - 1} others</span>
          </p>
          <p>
            <span className="font-bold">
              {caption && caption.from.username}
            </span>{" "}
            {caption && (viewMore ? caption.text : caption.text.slice(0, 40))}
            <span
              className="cursor-pointer text-gray-400"
              onClick={() => setViewMore((prevState) => !prevState)}
            >
              {caption &&
                caption.text.length > 40 &&
                (viewMore ? " ...Less" : " ...More")}
            </span>
          </p>
          <p>{postDate}</p>
        </div>
        <PostFooterLike user_has_liked={user_has_liked} likes={likes} />
      </div>
      <div className="mt-1 flex h-10 justify-between gap-2 sm:h-12 xl:h-10 2xl:h-12">
        <Avatar page="post" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="h-10 w-full rounded-full bg-gray-200 px-3 py-2 sm:h-12 xl:h-10 2xl:h-12 2xl:px-4"
        />
        <p className="shrink-0 grow-0 cursor-pointer content-center text-base font-bold tracking-wide text-blue-500 transition-all duration-200 hover:-translate-y-[1px] hover:scale-110 sm:text-xl xl:text-sm 2xl:text-lg 2xl:font-extrabold">
          Post
        </p>
      </div>
    </div>
  );
};

export default PostFooter;
