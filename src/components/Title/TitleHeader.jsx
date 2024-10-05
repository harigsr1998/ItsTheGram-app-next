import Title from "./Title";

const TitleHeader = () => {
  return (
    <div className="bg-gray-200 px-1 pt-1 sm:px-2 sm:pt-2 xl:hidden">
      <div className="flex justify-between bg-white px-2 sm:rounded-lg sm:px-4 sm:py-1">
        <Title />
        <div>{">"}</div>
      </div>
    </div>
  );
};

export default TitleHeader;
