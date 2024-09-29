"use client";

import { useState } from "react";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";

const PostFooterLike = ({ likes, user_has_liked }) => {
  const [userHasLiked, setUserHasLiked] = useState(user_has_liked);
  const [likesCount, setLikesCount] = useState(likes.count);

  const like = (value) => {
    setUserHasLiked((prevState) => !prevState);
    setLikesCount((prevState) => prevState + value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {userHasLiked ? (
        <PiHeartFill
          fill="red"
          className="size-7 cursor-pointer transition-all duration-200 hover:scale-110 sm:size-9 xl:size-7 2xl:size-8"
          onClick={() => like(-1)}
        />
      ) : (
        <PiHeartBold
          className="size-7 cursor-pointer text-red-500 transition-all duration-200 hover:scale-110 sm:size-9 xl:size-7 2xl:size-8"
          onClick={() => like(+1)}
        />
      )}
      <span className="font-bold text-red-500">{likesCount}</span>
    </div>
  );
};

export default PostFooterLike;
