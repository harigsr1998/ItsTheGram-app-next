import getData from "@/data/getDataWithoutAPI";
import SavedIndividual from "@/components/SavedIndividual";

const SavedPage = async () => {
  const data = await getData();

  return (
    <div className="h-[calc(100svh-104px)] bg-white p-1 sm:h-[calc(100vh-16px)] sm:rounded-lg sm:p-4">
      <h2 className="font-bold sm:text-5xl xl:text-3xl 2xl:text-5xl">Saved</h2>
      <div className="noScrollBar row-auto grid grid-cols-2 overflow-y-scroll sm:h-[calc(100vh-96px)] sm:gap-3 xl:h-[calc(100vh-84px)] xl:gap-2 2xl:h-[calc(100vh-96px)]">
        {data.map((item) => (
          <SavedIndividual individualItem={item} />
        ))}
      </div>
    </div>
  );
};

export default SavedPage;
