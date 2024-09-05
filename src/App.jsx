import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import dummyData from "./data/dummyData";

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet context={dummyData} />
    </>
  );
};

export default App;
