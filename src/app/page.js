import IndividualPost from "@/components/post/IndividualPost";
import StoriesBar from "@/components/StoriesBar";
import getData from "@/data/getDataWithoutAPI";

const HomePage = async () => {
  const data = await getData();

  return (
    <>
      <StoriesBar />
      <div className="noScrollBar mt-1 min-h-[calc(100svh-180px)] w-full overflow-y-scroll bg-white sm:mt-2 sm:h-[calc(100vh-136px)] sm:rounded-lg xl:h-[calc(100vh-120px)] 2xl:h-[calc(100vh-136px)] 2xl:rounded-xl">
        {data.map((post, index) => (
          <IndividualPost post={post} key={post.id} index={index} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
