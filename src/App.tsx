import Navigation from "./components/Navigation";
import SearchFiltler from "./components/SearchFiltler";
import Modal from "./ui/Modal";

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col  items-center ">
      <Modal />
      <Navigation />
      <SearchFiltler />
    </div>
  );
};

export default App;
