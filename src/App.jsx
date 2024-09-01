import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import dummyData from "./data/dummyData";

const App = () => {
  return (
    <>
      <Header />
      <Outlet context={dummyData} />
    </>
  );
};

export default App;
