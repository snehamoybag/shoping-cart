import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import ItemsList from "../components/ItemsList";

const HomePage = () => {
  const { itemsData } = useOutletContext();

  return (
    <main>
      <Hero />
      <ItemsList items={itemsData} />
    </main>
  );
};

export default HomePage;
