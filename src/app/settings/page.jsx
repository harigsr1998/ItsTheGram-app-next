import ContentGrid from "@/components/ContentGrid";
import SavedStoriesBar from "@/components/profile/SavedStoriesBar";
import StatsBar from "@/components/profile/StatsBar";
import ProfileCaption from "@/components/profile/ProfileCaption";
import Avatar from "@/components/avatar/Avatar";
import SettingsProfileNames from "@/components/profile/SettingsProfileNames";
import ButtonsBar from "@/components/profile/ButtonsBar";
import { RiSettings4Fill } from "react-icons/ri";

const SettingsPage = () => {
  return (
    <div className="flex min-h-[calc(100svh-104px)] flex-col gap-2 overflow-hidden bg-white p-1 text-center text-sm sm:h-[calc(100vh-16px)] sm:rounded-lg sm:p-4 sm:text-lg xl:text-sm 2xl:rounded-xl 2xl:text-lg">
      <div className="noScrollBar overflow-y-scroll">
        <div className="flex justify-between">
          <h2 className="shrink-0 grow-0 text-left text-xl font-bold sm:text-3xl xl:text-lg 2xl:text-3xl">
            Settings
          </h2>
          <RiSettings4Fill className="size-7 sm:size-9 xl:size-7 2xl:size-9" />
        </div>
        <Avatar page="settings" />
        <SettingsProfileNames />
        <StatsBar />
        <ProfileCaption />
        <ButtonsBar />
        <SavedStoriesBar />
        <ContentGrid />
      </div>
    </div>
  );
};

export default SettingsPage;
