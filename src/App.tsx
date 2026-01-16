import { useAtomValue } from "jotai";
import Navigation from "./components/Navigation";
import SearchFiltler from "./components/SearchFiltler";
import Modal from "./ui/Modal";
import { uiModal } from "./atoms/modalatom";
import JobList from "./components/JobList";

const App = () => {
  const modal = useAtomValue(uiModal);
  return (
    <div className=" min-h-screen flex flex-col  items-center ">
      <Navigation />
      <SearchFiltler />
      <div className="w-full max-w-7xl px-6 pb-8">
        <JobList />
      </div>
      {modal && <Modal />}
    </div>
  );
};

export default App;
