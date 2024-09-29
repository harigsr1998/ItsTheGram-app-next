import dynamic from "next/dynamic";

const IndividualSelector = dynamic(
  () => import("@/components/IndividualSelector"),
  {
    ssr: false,
  },
);

const ChatsSelector = () => {
  const chats = [];
  for (let index = 0; index < 24; index++) {
    chats.push(<IndividualSelector page="chat" key={index} dataID={index} />);
  }

  return (
    <>
      <div className="flex shrink-0 grow-0 justify-between rounded-full bg-gray-200 p-2 text-center font-bold sm:text-xl xl:text-base 2xl:text-xl [&>*]:content-center [&>*]:rounded-full [&>*]:bg-white [&>*]:px-5 [&>*]:py-2">
        <div className="">Primary</div>
        {/* {CHANGE TO CONTENT SELECTOR, JUST STYLE IS ENOUGH} */}
        <div className="">General</div>
        <div className="">Requests</div>
      </div>
      <div className="noScrollBar overflow-y-scroll bg-gray-200">{chats}</div>
    </>
  );
};

export default ChatsSelector;
