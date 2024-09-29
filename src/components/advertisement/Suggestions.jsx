import dynamic from "next/dynamic";
import getData from "@/data/getDataWithoutAPI";

const SuggestionsIndividual = dynamic(() => import("./SuggestionsIndividual"), {
  ssr: false,
});

const Suggestions = async () => {
  const data = await getData();

  return (
    <div className="flex-1 flex flex-col overflow-y-hidden">
      <div className="flex justify-between font-bold grow-0 shrink-0 2xl:text-lg">
        <h2 className="2xl:text-2xl">Suggested To You</h2>
      </div>

      <div className="overflow-y-scroll noScrollBar grow">
        {data.map((dataItem, index) => (
          <div
            className="flex justify-between items-center mt-2 2xl:mt-3 w-full gap-2 2xl:gap-3"
            id="suggestions"
            key={index}
          >
            <SuggestionsIndividual dataItem={dataItem} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
