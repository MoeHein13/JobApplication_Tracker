import Navigation from "./components/Navigation";
import SearchFiltler from "./components/SearchFiltler";

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col  items-center ">
      <Navigation />
      <SearchFiltler />
    </div>
  );
};

export default App;
