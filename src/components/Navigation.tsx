const Navigation = () => {
  return (
    <div className="m-6 max-w-7xl border border-white rounded-2xl shadow-md bg-white flex p-5 flex-wrap justify-between gap-3 ">
      <div className="">
        <h1 className="text-3xl font-bold ">Job Application Tracker</h1>
        <span>Total Applications : 20</span>
      </div>

      <div className="flex justify-between items-center gap-3">
        <button className="bg-blue-300 text-white font-semibold rounded-xl px-5 py-2 text-2xl ">
          Add Application
        </button>
        <button className=" border border-blue-300 rounded-xl px-5 py-2 text-blue-300 text-2xl">
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default Navigation;
