"use client";

import { useRouter } from "next/navigation";
import { RxCaretLeft } from "react-icons/rx";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="aspect-square w-9 shrink-0 grow-0 content-center rounded-full bg-gray-200 sm:w-12 xl:w-9 2xl:w-12"
      onClick={() => router.back()}
    >
      <RxCaretLeft className="mx-auto size-8 sm:size-10 xl:size-8 2xl:size-10" />
    </button>
  );
};

export default BackButton;
