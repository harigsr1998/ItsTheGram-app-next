import Insights from "./Insights";
import Suggestions from "./Suggestions";

const Advertisement = () => {
  return (
    <div className="hidden h-[calc(100vh-16px)] flex-col rounded-lg pl-12 pr-4 xl:flex">
      <Insights />
      <Suggestions />
      <div className="shrink-0 grow-0 px-1 pt-[23px] text-[8px] tracking-wide text-gray-400 2xl:px-[6px] 2xl:pt-[27px] 2xl:text-[10px]">
        <p>About &#8226; Help &#8226; Privacy &#8226; Terms &#8226; Language</p>
        <p className="pt-1 uppercase 2xl:pt-[6px]">
          2024 itsthegram from metal
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
