"use client";

import Link from "next/link";
import {
  RiHome5Fill,
  RiHome5Line,
  RiVideoFill,
  RiVideoLine,
  RiSettings4Fill,
  RiSettings4Line,
} from "react-icons/ri";
import {
  HiOutlineSquares2X2,
  HiSquares2X2,
  HiBookmark,
  HiOutlineBookmark,
} from "react-icons/hi2";
import { PiPaperPlaneTiltBold, PiPaperPlaneTiltFill } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { usePathname } from "next/navigation";
import UserSelector from "./UserSelector";
import Title from "../Title/Title";

const Sidebar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Feed",
      href: "/",
      icons: {
        active: <RiHome5Fill />,
        inactive: <RiHome5Line />,
      },
    },
    {
      title: "Explore",
      href: "/explore",
      icons: {
        active: <HiSquares2X2 />,
        inactive: <HiOutlineSquares2X2 strokeWidth={2} />,
      },
    },
    {
      title: "Reels",
      href: "/reels",
      icons: {
        active: <RiVideoFill />,
        inactive: <RiVideoLine />,
      },
    },
    {
      title: "Saved",
      href: "/saved",
      icons: {
        active: <HiBookmark />,
        inactive: <HiOutlineBookmark strokeWidth={2} />,
      },
    },
    {
      title: "Chats",
      href: "/chats",
      icons: {
        active: <PiPaperPlaneTiltFill />,
        inactive: <PiPaperPlaneTiltBold />,
      },
    },
    {
      title: "Settings",
      href: "/settings",
      icons: {
        active: <RiSettings4Fill />,
        inactive: <RiSettings4Line />,
      },
    },
  ];

  return (
    <div className="flex bg-white p-1 text-sm font-semibold sm:h-[calc(100vh-16px)] sm:flex-col sm:rounded-lg sm:p-4 2xl:p-6 2xl:text-xl">
      <Title page="sidebar" />
      <div className="flex grow sm:flex-col sm:justify-between xl:pt-4 2xl:h-[calc(100vh-128px)]">
        <div className="flex w-full justify-around sm:w-auto sm:flex-col sm:justify-normal sm:gap-6 xl:gap-2 2xl:gap-3">
          {navLinks.map((navLink) => (
            <Link
              href={navLink.href}
              className={`flex justify-start gap-2 rounded-lg p-1 px-4 align-middle transition-all duration-200 hover:scale-105 hover:bg-gray-200 sm:justify-center sm:p-4 sm:px-0 xl:justify-start xl:px-8 xl:py-2 2xl:px-10 2xl:py-3 [&:nth-child(4)]:hidden sm:[&:nth-child(4)]:inline-flex ${
                pathname === navLink.href && "bg-gray-200 font-bold"
              }`}
              key={navLink.title}
            >
              {" "}
              <span className="xl:inline-flex xl:align-middle [&>*]:inline-block [&>*]:size-9 [&>*]:xl:size-5 [&>*]:2xl:size-7">
                {/* mx-auto xl:mr-2 [&>*]:xl:-mt-[2px] */}
                {pathname === navLink.href
                  ? navLink.icons.active
                  : navLink.icons.inactive}
              </span>
              <span className="hidden xl:inline-flex xl:align-middle">
                {/* xl:-mt-1 xl:mr-2 */}
                {navLink.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden flex-col gap-4 sm:flex sm:gap-6">
          <UserSelector />
          <Link
            href="/logout"
            className="flex w-full shrink-0 grow-0 justify-start gap-2 rounded-lg align-middle text-base transition-all duration-200 hover:scale-105 hover:bg-gray-200 sm:p-4 xl:px-8 xl:py-2 2xl:rounded-xl 2xl:px-10 2xl:py-3 2xl:text-2xl"
          >
            <span className="xl:inline-flex">
              <TbLogout2 className="self-center sm:size-10 xl:size-6 2xl:size-8" />
            </span>
            <span className="hidden xl:inline-flex xl:align-middle">
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
