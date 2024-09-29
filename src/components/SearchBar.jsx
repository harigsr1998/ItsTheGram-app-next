import { BsTrash3 } from "react-icons/bs";

const SearchBar = ({ placeholder, trash = false }) => {
  return (
    <div className="flex h-10 shrink-0 grow-0 gap-1 sm:h-12 sm:gap-3 xl:h-10 xl:gap-2 2xl:h-12">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-full bg-gray-200 px-3 py-2 2xl:px-4"
      />
      {trash && (
        <div className="aspect-square h-10 content-center rounded-full bg-gray-200 sm:h-12 xl:h-10 2xl:h-12">
          <BsTrash3 size={20} className="mx-auto cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
