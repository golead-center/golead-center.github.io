import { useState } from "react";
import "../../../styles/Tab.css";

export default function YeeWeiFoong() {
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
            PhD Candidate, Mining and Materials Engineering. I research nanocarbon electrode materials and solid polymer electrolytes for supercapacitors. I have been actively participating in the leadership of ILead:Graduate, NACE SOSS, and UTEN to inspire meaningful networking and connections between academia and industry. I am currently pursuing the computational research on electron transfer properties for energy materials and assisting in the founding of the leadership center goLEAD at McGill University.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            Throughout my involvement in leadership learning in the past few years, I realized the importance of leadership and professional skills development for lifelong learning and influencing the people around us to work together towards the same vision. I am passionate about sharing this inspiration with at McGill University students so that they too can be the next-generation of leaders enacting positive change to the world.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            My joy and satisfaction came from witnessing the students' growth into the mature leaders through this program. I am glad to see that they have been learning and acquiring new perspectives from inter-disciplinary environment. I hope that they will continue their journey of leadership learning and share this inspiration with more people around them.
          </p>
        </div>
      </div>
    </div>
  );
}