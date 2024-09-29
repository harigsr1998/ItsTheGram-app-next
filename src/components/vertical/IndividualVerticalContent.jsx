import Image from "next/image";
import VerticalContentControls from "./VerticalContentControls";

const IndividualVerticalContent = ({ page, dataParams }) => {
  const imageRandomizer = Math.floor(Math.random() * 1000);

  return (
    <div className="relative w-full h-full shrink-0">
      <Image
        src={`https://picsum.photos/643/899?random=${imageRandomizer}`}
        width={643}
        height={899}
        className={`object-cover snap-center w-full h-full`}
        key={imageRandomizer}
      />
      <VerticalContentControls page={page} dataParams={dataParams} />
    </div>
  );
};

export default IndividualVerticalContent;
