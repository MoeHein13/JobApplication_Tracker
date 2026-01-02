import { useSetAtom } from "jotai";
import { uiModal } from "../atoms/modalatom";
import { X } from "lucide-react";
const JobModal = () => {
  const setModal = useSetAtom(uiModal);
  const closeModal = () => {
    setModal((prev) => ({ ...prev, modal: false }));
  };
  return (
    <div
      className="flex justify-center items-center z-10 inset-0 fixed "
      onClick={closeModal}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h1>Job Application Adding</h1>
          <button
            onClick={closeModal}
            className="cursor-pointer  p-2 hover:bg-gray-200 hover:rounded-full"
          >
            <X />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="eg.Acme Corp"
              id="company"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              placeholder="eg.Frontend Engineer"
              id="position"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
        </div>
      </div>
      {/* <div className="rounded-xl p-5 border border-gray-400 max-w-72 ">
      </div> */}
    </div>
  );
};

export default JobModal;
