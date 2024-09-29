import dynamic from "next/dynamic";

const IndividualVerticalContent = dynamic(
  () => import("@/components/vertical/IndividualVerticalContent"),
  {
    ssr: false,
  },
);

const StoryPage = ({ searchParams }) => {
  const stories = [];
  for (let index = 0; index < 24; index++) {
    stories.push(
      <IndividualVerticalContent
        key={index}
        dataParams={searchParams}
        page="stories"
      />,
    );
  }

  return (
    <div className="h-[calc(100svh-104px)] bg-white sm:h-[calc(100vh-16px)] sm:rounded-lg sm:p-4">
      <div className="noScrollBar flex h-[calc(100svh-152px)] snap-x snap-mandatory overflow-x-scroll sm:h-[calc(100vh-48px)]">
        {stories}
      </div>
    </div>
  );
};

export default StoryPage;
