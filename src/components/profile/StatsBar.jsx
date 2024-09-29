const StatsBar = () => {
  return (
    <div className="flex shrink-0 grow-0 justify-evenly gap-8 px-16 sm:mt-4 sm:gap-12 sm:px-20 xl:mt-2 xl:gap-8 xl:px-16 2xl:mt-4 2xl:gap-12 2xl:px-20">
      <div className="flex flex-1 flex-col">
        <h4 className="text-base font-bold sm:text-xl xl:text-base 2xl:text-xl">
          {Math.floor(Math.random() * 10000)}
        </h4>
        <p className="text-gray-400">Posts</p>
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="text-base font-bold sm:text-xl xl:text-base 2xl:text-xl">
          {Math.floor(Math.random() * 10000)}
        </h4>
        <p className="text-gray-400">Followers</p>
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="text-base font-bold sm:text-xl xl:text-base 2xl:text-xl">
          {Math.floor(Math.random() * 10000)}
        </h4>
        <p className="text-gray-400">Following</p>
      </div>
    </div>
  );
};

export default StatsBar;
