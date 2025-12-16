const Navigation = () => {
  return (
    <div className="max-w-7x border-2 rounded-2xl shadow-md bg-white grid grid-cols-1 sm:grid-cols-2 p-5 justify-between gap=3">
      <div className="">
        <h1 className="text-3xl font-bold ">Job Application Tracker</h1>
        <span>Total Applications : 20</span>
      </div>
      <div className="">
        <div className="flex  items-center gap-3">
          <button className=" border border-blue-300 rounded-2xl p-3 text-blue-300">
            Export to Excel
          </button>
          <button className="bg-blue-300 text-white font-semibold rounded-2xl p-3">
            Add Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
