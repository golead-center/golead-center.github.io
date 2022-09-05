import { useState } from "react";
import "../../../styles/Tab.css";

export default function SatishTumulu() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index:any) => {
    setToggleState(index);
  };

  return (
    <div className="tab-content">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Background
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Why did you get involved with goLEAD?
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          What do you enjoy the most in the program?
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Background</h2>
          <p>
            I am pursuing my PhD from department of Materials Engineering at McGill, which focuses on developing the laser powder bed fusion additive manufacturing process of Al-Cu alloys. I have my Bachelor’s degree in Ceramic Engineering from NIT Rourkela, India. Before joining for graduate studies I worked as an assistant engineer at Vedanta aluminum limited, Jharsuguda, India. IN my free times, I enjoy photography, cooking and listening to music.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            I am part of a sustainable energy startup Urban Turbine, which completed goLEAD Activate and Launch and by so I got to know the motive of the program. Most of the students find out some solutions to problems but the problem comes when we go for best execution. By joining goLEAD I believe we can reach more minds and let their entrepreneurial and leadership skills blossom.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            First is it not only help people to just think, rather it helps in making their ideas work. Secondly, as part of my role I get to interact with both the internal team and people from different associations.
          </p>
        </div>
      </div>
    </div>
  );
}