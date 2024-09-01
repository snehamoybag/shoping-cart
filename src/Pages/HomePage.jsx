import Hero from "../components/Hero";
import ItemsContainer from "../components/ItemsContainer";
import dummyData from "../data/dummyData";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ItemsContainer itemsList={dummyData} />
    </main>
  );
};

export default HomePage;
