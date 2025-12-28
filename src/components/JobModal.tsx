const JobModal = () => {
  return (
    <div className="flex justify-center items-center z-10 inset-0 fixed ">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <h1>Job Application Adding</h1>
      </div>
      {/* <div className="rounded-xl p-5 border border-gray-400 max-w-72 ">
      </div> */}
    </div>
  );
};

export default JobModal;
