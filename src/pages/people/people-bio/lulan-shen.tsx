import { useState } from "react";
import "../../../styles/Tab.css";

export default function LulanShen() {
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
            I am currently a PhD student in Electrical Engineering, specialized in deep learning. My research work focuses on compressed neural networks, domain adaptation, computer vision, and computer hardware. I obtained my master’s degree in Mathematics and Computing at University of Oxford and had been working for Bosch Automotive for about 3 years. I have participated in the goLEAD program from 2020 Move to 2021 Launch.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            Even small ideas may contribute to making a difference in the future. School teaches you a lot of valuable knowledge, except telling you how to be an entrepreneur. I have initiated some ideas with my expertise but never have a hand-on experience to convert my ideas into real products. I would like to learn through goLEAD to validate our defined problem, determine a sustainable solution, as well as improving my leadership skills.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            I enjoyed the time working with my teammates and fighting for the same goal. I met lots of amazing people who I might share my career with.
          </p>
        </div>
      </div>
    </div>
  );
}