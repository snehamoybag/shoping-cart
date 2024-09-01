import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import ItemsContainer from "../components/ItemsContainer";

const HomePage = () => {
  const itemsData = useOutletContext();

  return (
    <main>
      <Hero />
      <ItemsContainer itemsList={itemsData} />
    </main>
  );
};

export default HomePage;
