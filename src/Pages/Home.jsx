import Hero from "../components/Hero";
import ItemsContainer from "../components/ItemsContainer";

const dummyList = [
  {
    id: 1,
    name: "foo",
    price: 100,
    rating: 4,
    img: "/src/assets/images/f.png",
  },

  {
    id: 2,
    name: "bar",
    price: 199,
    rating: 4.5,
    img: "/src/assets/images/f.png",
  },
  {
    id: 3,
    name: " baz",
    price: 149,
    rating: 4.3,
    img: "/src/assets/images/f.png",
  },
  {
    id: 4,
    name: "bat",
    price: 89,
    rating: 2.3,
    img: "/src/assets/images/f.png",
  },

  {
    id: 5,
    name: "ball",
    price: 199,
    rating: 1.7,
    img: "/src/assets/images/f.png",
  },
  {
    id: 6,
    name: " cat",
    price: 149,
    rating: 3.5,
    img: "/src/assets/images/f.png",
  },
];

const Home = () => {
  return (
    <main>
      <Hero />
      <ItemsContainer itemsList={dummyList} />
    </main>
  );
};

export default Home;
