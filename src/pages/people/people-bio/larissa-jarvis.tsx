import { useState } from "react";
import "../../../styles/Tab.css";

export default function LarissaJarvis() {
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
            I am a research associate with the McGill Sustainability Systems Initiative (MSSI). My academic background is in Environmental Sciences and Water Resource Management, and before joining the MSSI team I worked with the Land Use and Global Environment (LUGE) lab at McGill and the University of British Columbia. The LUGE research group focuses on agriculture, land use, and food security, and much of my work went into building the datasets needed to help understand farming systems at the global scale. I have experience working in industry as an environmental laboratory analyst, and in an international research setting working on a drip-irrigation project with small farmers in Guyana and Saint Lucia.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            I became involved with goLEAD because the program is providing a great opportunity for students interested in tackling today’s big problems, and is doing so in a way that aligns with the MSSI’s sustainability-focused, multidisciplinary and action-oriented approach to research.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            The most enjoyable part of this process so far has been the level of energy and enthusiasm from the participants. It is also really interesting to see which problems the various groups have decided to take on, and how there are very diverse interests across the cohort. The program is also using many techniques for both teaching and evaluating projects/solutions, so it’s been a great learning experience for me as well!
          </p>
        </div>
      </div>
    </div>
  );
}