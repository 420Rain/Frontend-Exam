import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ searched, setSearched, onSearch, onReset }) => {
  return (
    <div className="flex gap-3 items-center font-lato">
      <input
        type="text"
        placeholder="Search for Products"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        className="rounded-md w-1/4 px-3 py-1.5 border border-black ml-2"
      />

      <button className="cursor-pointer" onClick={onSearch}>
        <IoSearchOutline className="size-8" />
      </button>

      <button className="cursor-pointer text-sm ml-1 text-gray-500" onClick={onReset}>
        Reset Search
      </button>
    </div>
  )
}

export default SearchBar