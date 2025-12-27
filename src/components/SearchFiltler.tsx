const SearchFiltler = () => {
  return (
    <div className="w-full max-w-7xl rounded-2xl shadow-md p-5">
      <form className="border border-gray-300 rounded-xl focus-within:shadow-lg focus-within:ring-4 focus-within:ring-indigo-500/10 transform duration-500">
        <input
          type="text"
          placeholder="Search by company or platform... "
          className="px-5 py-3 min-w-full focus:outline-0 text-xl text-gray-500"
        />
      </form>
    </div>
  );
};

export default SearchFiltler;
