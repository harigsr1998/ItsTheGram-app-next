import getData from "@/data/getDataWithoutAPI";
import SearchBar from "@/components/SearchBar";
import BackButton from "@/components/BackButton";
import IndividualMessage from "@/components/chats/IndividualMessage";
import IndividualMessageHeader from "@/components/chats/IndividualMessageHeader";

const IndividualChatPage = async ({ searchParams }) => {
  const data = await getData();

  return (
    <div className="flex h-[calc(100svh-104px)] flex-col gap-1 overflow-hidden bg-white p-1 sm:h-[calc(100vh-16px)] sm:gap-3 sm:rounded-lg sm:p-4 sm:text-lg xl:text-sm 2xl:rounded-xl 2xl:text-lg">
      {/* Header */}
      <div className="flex h-10 shrink-0 grow-0 items-center gap-2 sm:h-14 sm:gap-4 xl:h-10 xl:gap-2 2xl:h-14 2xl:gap-3">
        <BackButton />
        <IndividualMessageHeader
          randomProfilePictureId={searchParams.randomProfilePictureId}
          full_name={searchParams.full_name}
          username={searchParams.username}
        />
      </div>

      {/* Body */}
      <div className="noScrollBar overflow-y-scroll rounded-xl bg-gray-200 p-1 sm:rounded-lg sm:p-4 xl:p-2 2xl:rounded-xl">
        {data.map((dataItem, index1) =>
          dataItem.comments.data.map((commentItem, index2) => (
            <IndividualMessage
              commentItem={commentItem}
              index1={index1}
              index2={index2}
              randomProfilePictureId={searchParams.randomProfilePictureId}
            />
          )),
        )}
      </div>

      {/* Footer */}
      <div className="shrink-0 grow-0 2xl:mt-1">
        <SearchBar placeholder="Message" />
      </div>
    </div>
  );
};

export default IndividualChatPage;
