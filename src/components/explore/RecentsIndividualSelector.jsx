"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const IndividualSelector = dynamic(
  () => import("@/components/IndividualSelector"),
  {
    ssr: false,
  },
);

const RecentsIndividualSelector = ({ dataID, commentID, page }) => {
  const [display, setDisplay] = useState(true);

  return (
    display && (
      <IndividualSelector page={page} dataID={dataID} commentID={commentID}>
        <div className="content-center">
          <IoCloseCircleOutline
            size={25}
            className="size-8 cursor-pointer sm:size-10 xl:size-6 2xl:size-8"
            onClick={() => setDisplay(false)}
          />
        </div>
      </IndividualSelector>
    )
  );
};

export default RecentsIndividualSelector;
