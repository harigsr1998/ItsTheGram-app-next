import ContentGrid from "@/components/ContentGrid";
import SavedStoriesBar from "@/components/profile/SavedStoriesBar";
import ButtonsBar from "@/components/profile/ButtonsBar";
import StatsBar from "@/components/profile/StatsBar";
import ProfilePic from "@/components/profile/ProfilePic";
import ProfileNames from "@/components/profile/ProfileNames";
import ProfileCaption from "@/components/profile/ProfileCaption";

const ProfilePage = ({ searchParams }) => {
  return (
    <div className="flex min-h-[calc(100svh-104px)] flex-col gap-2 overflow-hidden bg-white p-1 text-center text-sm sm:h-[calc(100vh-16px)] sm:rounded-lg sm:p-4 sm:text-lg xl:text-sm 2xl:rounded-xl 2xl:text-lg">
      <div className="noScrollBar overflow-y-scroll">
        <h2 className="shrink-0 grow-0 text-left text-xl font-bold sm:text-3xl xl:text-lg 2xl:text-3xl">
          Profile
        </h2>
        <ProfilePic search_Params={searchParams} />
        <ProfileNames search_Params={searchParams} />
        <StatsBar />
        <ProfileCaption />
        <ButtonsBar search_Params={searchParams} />
        <SavedStoriesBar />
        <ContentGrid />
      </div>
    </div>
  );
};

export default ProfilePage;
