import ChatsSelector from "@/components/chats/ChatsSelector";
import SearchBar from "@/components/SearchBar";

const ChatsPage = () => {
  return (
    <div className="flex min-h-[calc(100svh-104px)] flex-col gap-2 overflow-hidden bg-white p-1 sm:h-[calc(100vh-16px)] sm:gap-4 sm:rounded-lg sm:p-4 sm:text-lg xl:text-sm 2xl:rounded-xl 2xl:text-lg">
      <h2 className="-mb-1 shrink-0 grow-0 text-left text-xl font-bold sm:-mb-3 sm:text-3xl xl:text-lg 2xl:-mb-2 2xl:text-3xl">
        Chats
      </h2>
      <SearchBar placeholder="Search in messages" trash={true} />
      <ChatsSelector />
    </div>
  );
};

export default ChatsPage;
