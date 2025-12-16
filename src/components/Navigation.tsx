const Navigation = () => {
  return (
    <div className="max-w-7x border-2 rounded-2xl shadow-md bg-white">
      <div>
        <h1 className="text-3xl font-bold ">Job Application Tracker</h1>
        <span>Total Applications : 20</span>
      </div>
      <div>
        <button className="border-blue-300 rounded-2xl p-3 text-blue-300">
          Export to Excel
        </button>
        <button className="bg-blue-300 text-white font-semibold rounded-2xl p-3">
          Add Application
        </button>
      </div>
    </div>
  );
};

export default Navigation;
