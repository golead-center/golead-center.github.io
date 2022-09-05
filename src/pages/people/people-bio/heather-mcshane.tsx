import { useState } from "react";
import "../../../styles/Tab.css";

export default function HeatherMcShane() {
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
            Dr. Heather McShane is the Program Director and Catalyst-in-Chief of the McGill Sustainability Systems Initiative (<a href="https://www.mcgill.ca/mssi/">https://www.mcgill.ca/mssi/</a>). Her chief role is to create a community of sustainability researchers scholars from across McGill’s faculties and to develop a multi-disciplinary and innovative hub of sustainability research. Heather is also a board member of the Montreal City Mission, Camp Cosmos and ECOLE, McGill’s student-led experiment in sustainable collective living and learning, as well as being a mentor for YES Montreal.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            I got involved with goLEAD because I wanted to take part in this forward-thinking program that brings together groups of students from different academic backgrounds and coaches them from ideation to business plan development. I particularly like toe goLEAD approach because it takes a multi-disciplinary approach – something we need our students to have experience of if we are to address today’s complex problems.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            It was great to watch people from diverse backgrounds working together to build a team and push through barriers to come up with a pragmatic idea that might lessen our impact on the world. I never failed to be impressed by the enthusiasm and seriousness the participants brought to this voluntary activity. Eating pizza once a week wasn’t bad either!
          </p>
        </div>
      </div>
    </div>
  );
}