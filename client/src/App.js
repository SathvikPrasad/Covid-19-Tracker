import React from "react";
import CovidContextProvider from "./context/CovidContext";
import { CovidHome } from "./components/CovidHome";
import { SearchForm } from "./components/SearchForm";
// import Jquery from "./components/Jquery";

const App = () => {
  return (
    <div>
      <CovidContextProvider>
        <SearchForm />
        {/* <Jquery /> */}

        <CovidHome />
      </CovidContextProvider>
    </div>
  );
};

export default App;
