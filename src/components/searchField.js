import { useState, useContext } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(`/search/photos?page=1&per_page=30&query=${searchValue}
    &client_id=${process.env.REACT_APP_ACCESS_KEY}`);
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(`/search/photos?page=1&per_page=30&query=${searchValue}
      &client_id=${process.env.REACT_APP_ACCESS_KEY}`);
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="flex w-full ml-12">
      <input
        className="search-input bg-gray-50 border-gray-800 text-sm w-full
        indent-2 p-2.5 outline-none focus:border-gray-800 focus:ring-2
        rounded-tl rounded-bl ml-8"
        type="search"
        placeholder="Search for anything...."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className=" bg-pink-600 px-6 py-2.5 text-white text-sm text-center
         rounded-tr rounded-br focus:ring-2 focus:ring-gray-700 
         disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
