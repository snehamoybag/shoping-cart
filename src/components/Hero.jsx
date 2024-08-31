import bannerImg from "../assets/images/fake-fashion-banner.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={bannerImg}
        alt="Fake Fashion: Get the worst deal!"
        className="hero__img"
      />
    </div>
  );
};

export default Hero;
