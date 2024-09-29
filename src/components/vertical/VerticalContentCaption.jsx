"use client";

import { useState } from "react";

const VerticalContentCaption = ({ caption }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <>
      <p>
        {caption && (viewMore ? caption : caption.slice(0, 40))}
        <span
          className="cursor-pointer"
          onClick={() => setViewMore((prevState) => !prevState)}
        >
          {caption &&
            caption.length > 40 &&
            (viewMore ? " ...Less" : " ...More")}
        </span>
      </p>
    </>
  );
};

export default VerticalContentCaption;
