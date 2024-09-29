import dynamic from "next/dynamic";

const IndividualVerticalContent = dynamic(
  () => import("@/components/vertical/IndividualVerticalContent"),
  {
    ssr: false,
  },
);

const ReelsPage = () => {
  const reels = [];
  for (let index = 0; index < 24; index++) {
    reels.push(<IndividualVerticalContent key={index} page="reels" />);
  }
  // Change to add on scroll
  return (
    <div className="h-[calc(100svh-104px)] bg-white sm:h-[calc(100vh-16px)] sm:rounded-lg sm:p-4">
      <div className="noScrollBar flex h-[calc(100svh-104px)] snap-y snap-mandatory flex-col overflow-y-scroll sm:h-[calc(100vh-48px)]">
        {reels}
      </div>
    </div>
  );
};

export default ReelsPage;
