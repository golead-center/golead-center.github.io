import { useState } from "react";
import "../../../styles/Tab.css";

export default function SidneyOmelon() {
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
            Associate Professor, Mining and Materials Engineering. I worked as a process engineer for an engineering consulting company, and was the first chemical engineer at a green-tech start-up in Silicon Valley before working in academia. Rowing and coaching in university were some of the extra-curricular activities that complimented my studies.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            My engineering training continues to be critical to my career, however, the skills I learned outside of the classroom were also important for achieving career and life goals. Therefore I wish to contribute towards extracurricular programs such as MOVE goLEAD.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            Hearing the diverse range of ideas and opinions from students is my favourite aspect of being part of this program.
          </p>
        </div>
      </div>
    </div>
  );
}