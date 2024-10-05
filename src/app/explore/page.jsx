import dynamic from "next/dynamic";
import SearchBar from "@/components/SearchBar";
import ContentGrid from "@/components/ContentGrid";

const RecentExploreBar = dynamic(
  () => import("@/components/explore/RecentExploreBar"),
  {
    ssr: false,
  },
);

const ExplorePage = () => {
  return (
    <div className="flex h-[calc(100svh-96px)] flex-col bg-white p-1 sm:h-[calc(100vh-60px)] sm:rounded-lg sm:p-4">
      <h2 className="shrink-0 grow-0 content-center text-xl font-bold sm:pb-1 sm:text-3xl xl:text-lg 2xl:pb-1 2xl:text-3xl">
        Search
      </h2>
      <SearchBar placeholder="Search on Instagram" trash={true} />
      <div className="shrink-0 grow-0 pb-1 sm:mt-2 sm:pb-3 xl:mt-4 xl:pb-2 2xl:pb-3">
        <p className="text-base font-semibold sm:text-xl xl:text-sm 2xl:text-xl">
          Recent
        </p>
        <div className="noScrollBar flex gap-1 overflow-x-scroll sm:gap-3 xl:gap-2">
          <RecentExploreBar />
        </div>
      </div>
      <ContentGrid page="explore" />
    </div>
  );
};

export default ExplorePage;
