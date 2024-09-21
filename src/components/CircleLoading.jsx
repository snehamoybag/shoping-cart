import "../styles/loading.css";
import "../styles/sr-only.css";

const CircleLoading = () => {
  return (
    <p className="loading loading--circle" title="loading...">
      <span className="sr-only">Loading...</span>
    </p>
  );
};

export default CircleLoading;
