import { useOutletContext } from "react-router-dom";
import ItemsList from "../components/ItemsList";

const HomePage = () => {
  const { itemsData } = useOutletContext();

  return (
    <main>
      <ItemsList items={itemsData} />
    </main>
  );
};

export default HomePage;
