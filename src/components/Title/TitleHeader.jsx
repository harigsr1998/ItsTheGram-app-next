import Title from "./Title";

const TitleHeader = () => {
  return (
    <div className="flex justify-between bg-white px-2 py-1 sm:hidden">
      <Title />
      <div>{">"}</div>
    </div>
  );
};

export default TitleHeader;
