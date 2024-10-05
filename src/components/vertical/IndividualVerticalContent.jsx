import Image from "next/image";
import VerticalContentControls from "./VerticalContentControls";

const IndividualVerticalContent = ({ page, dataParams }) => {
  const imageRandomizer = Math.floor(Math.random() * 1000);

  return (
    <div className="relative h-fit w-full shrink-0">
      <Image
        src={`https://picsum.photos/608/932?random=${imageRandomizer}`}
        width={608}
        height={932}
        className={`h-full w-full snap-center object-cover`}
        key={imageRandomizer}
      />
      <VerticalContentControls page={page} dataParams={dataParams} />
    </div>
  );
};

export default IndividualVerticalContent;
