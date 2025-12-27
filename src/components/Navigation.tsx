import { Plus } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full max-w-7xl m-6 border border-white rounded-2xl shadow-md bg-white flex p-5 flex-wrap justify-between gap-3 items-center ">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold ">Job Application Tracker</h1>
        <span>Total Applications : 20</span>
      </div>
      <div className="flex justify-between items-center gap-3 ">
        <button className="bg-blue-400 text-white font-semibold rounded-xl px-5 py-2 text-2xl cursor-pointer hover:-translate-y-1 transform duration-300 hover:shadow-2xl flex items-center gap-1">
          <Plus size={20} className="mt-1" />
          <div>Add Application</div>
        </button>
        <button className=" border border-blue-400 rounded-xl px-5 py-2 text-2xl font-semibold cursor-pointer hover:bg-blue-400 hover:text-white hover:transform duration-300  hover:-translate-y-1 hover:shadow-2xl">
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default Navigation;
