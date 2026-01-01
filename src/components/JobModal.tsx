import { useSetAtom } from "jotai";
import { uiModal } from "../atoms/modalatom";

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
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Job Application Adding</h1>
        <button onClick={closeModal}>Close</button>
      </div>
      {/* <div className="rounded-xl p-5 border border-gray-400 max-w-72 ">
      </div> */}
    </div>
  );
};

export default JobModal;
