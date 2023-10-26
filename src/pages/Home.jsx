import Data from "../components/Data";

const Home = () => {
  return (
    <main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 198 219"
        fill="none"
      >
        <path
          d="M14.627 -37.7561L11.423 -32.4961C-17.3643 14.7643 13.1151 75.8698 68.1853 81.3023V81.3023C104.052 84.8404 132.367 113.57 135.621 149.463V149.463C139.154 188.427 171.841 218.498 210.965 218.498H246.409"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="0.699193"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6.99 6.99"
        />
      </svg>
      <div className="weatherWrapper">
        <div className="weatherContent">
          <Data />
        </div>
      </div>
    </main>
  );
};

export default Home;
