import { useState } from "react";
import "../../../styles/Tab.css";

export default function NateQuitoriano() {
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
            Associate Professor Quitoriano is the founding director of goLEAD and has been involved in leadership activities since 1993. He has been involved in starting several organizations and has learned greatly from those experiences. His research background is in semiconductor growth and devices.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            In October 2016, he was asked to start a leadership initiative by Dean Nicell and began by surveying the leadership learning opportunities around campus. After attending many of the existing workshops he found that there was a missing niche, applied leadership skill development, and thus developed the MOVE program which gives students a project-based learning experience.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            Prof. Quitoriano loves interacting with members of the goLEAD organization as a teacher and mentor at all levels. He is thankful that students show enthusiasm in the program in general and is most grateful to the students and volunteers who have helped to establish and maintain the offerings of goLEAD.
          </p>
        </div>
      </div>
    </div>
  );
}