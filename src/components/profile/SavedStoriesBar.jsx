import Image from "next/image";
import getData from "@/data/getDataWithoutAPI";

const SavedStoriesBar = async () => {
  const data = await getData();

  return (
    <div className="noScrollBar flex shrink-0 grow-0 gap-6 overflow-x-scroll p-4 sm:gap-9 sm:py-6 xl:gap-6 2xl:gap-9">
      {data.map((dataItem) => (
        <div
          className="w-10 text-clip sm:w-14 xl:w-10 2xl:w-14"
          key={dataItem.id}
        >
          <div className="w-10 shrink-0 grow-0 rounded-full bg-green-400 outline outline-2 outline-offset-2 outline-gray-400 sm:w-14 sm:outline-4 sm:outline-offset-4 xl:w-10 xl:outline-2 xl:outline-offset-2 2xl:w-14 2xl:outline-4 2xl:outline-offset-4">
            <Image
              src={`https://picsum.photos/64/64?random=${Math.floor(
                Math.random() * 1000,
              )}`}
              width={64}
              height={64}
              className="aspect-square w-full rounded-full"
            />
          </div>
          <p className="mt-2 h-4 text-clip font-semibold text-gray-400 sm:mt-4 sm:h-5 xl:mt-2 xl:h-4 2xl:mt-4 2xl:h-5">
            {data[Math.floor(Math.random() * 6)].caption.text.slice(0, 5)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SavedStoriesBar;
