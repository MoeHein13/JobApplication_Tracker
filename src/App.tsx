import { useAtomValue } from "jotai";
import Navigation from "./components/Navigation";
import SearchFiltler from "./components/SearchFiltler";
import Modal from "./ui/Modal";
import { uiModal } from "./atoms/modalatom";

const App = () => {
  const modal = useAtomValue(uiModal);
  return (
    <div className=" min-h-screen flex flex-col  items-center ">
      <Navigation />
      <SearchFiltler />
      {modal && <Modal />}
    </div>
  );
};

export default App;
