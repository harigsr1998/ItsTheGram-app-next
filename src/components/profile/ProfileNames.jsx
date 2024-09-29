import getData from "@/data/getDataWithoutAPI";

const ProfileNames = async ({ search_Params }) => {
  const data = await getData();

  return (
    <>
      <p className="shrink-0 grow-0 text-base font-semibold sm:text-xl xl:text-base 2xl:text-xl">
        {search_Params.index &&
          search_Params.randomUserId &&
          data[search_Params.index].likes.data[search_Params.randomUserId]
            .full_name}
        {search_Params.username &&
          search_Params.full_name &&
          search_Params.full_name}
      </p>
      <p className="shrink-0 grow-0 font-semibold text-gray-400">
        @
        {search_Params.index &&
          search_Params.randomUserId &&
          data[search_Params.index].likes.data[search_Params.randomUserId]
            .username}
        {search_Params.username &&
          search_Params.full_name &&
          search_Params.username}
      </p>
    </>
  );
};

export default ProfileNames;
