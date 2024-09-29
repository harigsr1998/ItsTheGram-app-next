import RecentsIndividualSelector from "./RecentsIndividualSelector";

const RecentExploreBar = () => {
  const randomID = Math.floor(Math.random() * 24);
  const recents = [];
  for (let index = 0; index < 8; index++) {
    recents.push(
      <RecentsIndividualSelector
        page="explore"
        key={index}
        dataID={randomID}
        commentID={index}
      />
    );
  }

  return <>{recents}</>;
};

export default RecentExploreBar;
