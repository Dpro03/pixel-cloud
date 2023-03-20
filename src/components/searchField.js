const SearchField = () => {
  return (
    <div className="flex"><br></br>   
       📸
      <input
        className="bg-gray-50 border-gray-800 text-sm w-full
        indent-2 p-2.5 outline-none focus:border-gray-800 focus:ring-2
        rounded-tl rounded-bl"
        type="search"
        placeholder="Search for anything...."
      />
      <button 
        className=" bg-pink-600 px-6 py-2.5 text-white text-sm text-center
         rounded-tr rounded-br focus:ring-2 focus:ring-gray-700 
         disabled:bg-gray-400"
      >Search</button>
    </div>
  );
};

export default SearchField;
