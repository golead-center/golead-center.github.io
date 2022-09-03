import { useState } from "react";
import "../../../styles/Tab.css";

export default function AlexLiepins() {
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
            As an Academic Associate in Teaching and Learning Services, Dr. Liepins oversees the development and implementation of the SKILLS21 and SKILLSETS programs. His academic background is in the history of philosophy and he received his BA from Wisconsin Lutheran College in 2009, MA from Memorial University of Newfoundland in 2011, and PhD from the University of Ottawa in 2017. Dr. Liepins recently co-edited Developing Change Agents: Innovative Practices for Sustainability Leadership (2019) and is currently working on projects related to learning strategy capacity-building and graduate student teaching development.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            I was excited to get involved in the MOVE program to support students by leveraging my knowledge and background in student development programming to help them achieve their goals.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            I am always eager to interact with students and learn about the interesting challenges they are tackling through interdisciplinary collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}