import Image from "next/image";

const ContentGrid = ({ page }) => {
  const content = [];
  for (let index = 0; index < 24; index++) {
    content.push(
      <Image
        src={`https://picsum.photos/216/216?random=${Math.floor(
          Math.random() * 1000,
        )}`}
        width={216}
        height={216}
        className="aspect-square h-full w-full"
        key={index}
      />,
    );
  }

  return (
    <div
      className={`row-auto grid grid-cols-3 ${
        page === "explore" && "noScrollBar overflow-y-scroll"
      }`}
    >
      {content}
    </div>
  );
};

export default ContentGrid;
