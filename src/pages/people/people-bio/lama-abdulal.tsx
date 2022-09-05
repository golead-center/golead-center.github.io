import { useState } from "react";
import "../../../styles/Tab.css";

export default function LamaAbdulal() {
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
            Lama is studying Civil Engineering at Western University, and has a love for writing, cycling, and cooking. She gained research experience in the Chemical and Biochemical laboratory ICFAR during her summer break after first year.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            In early 2022, Lama was told about goLEAD's Activate program as part of her Design Fundamentals class, and she found the concept to be appealing. Then, near the end of the school year, Professor Nate asked her if she would like to continue with goLEAD given her enthusiasm during the program, and she happily agreed.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            Lama enjoyed being part of her team's progress from the start of the program until the final presentations. She really enjoyed connecting with her team's mentor who generously helped them in understanding the real-life applications of the team's project.
          </p>
        </div>
      </div>
    </div>
  );
}