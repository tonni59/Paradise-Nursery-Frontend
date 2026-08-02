import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

import bgImage from "../assets/nursery-bg.jpg";

function LandingPage() {

  const navigate = useNavigate();

  return (

    <div
      className="landing"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <div className="overlay">

        <div className="landing-content">

          <h1>🌿 Paradise Nursery</h1>

          <h2>
            Bring Nature Into Your Home
          </h2>

          <p>

            Paradise Nursery provides beautiful indoor and outdoor
            plants at affordable prices.

            <br /><br />

            We believe plants make every home healthier,
            greener and happier.

            <br /><br />

            Discover air-purifying plants,
            flowering plants,
            succulents,
            bonsai,
            cactus and many more.

          </p>

          <button

            onClick={() => navigate("/products")}

          >

            Get Started

          </button>

        </div>

      </div>

    </div>

  );

}

export default LandingPage;