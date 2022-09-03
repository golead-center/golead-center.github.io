import { useState } from "react";
import "../../../styles/Tab.css";

export default function VanjaLugonjic() {
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
            Growing up in Vancouver, BC as a first generation Canadian, I really cherished the land and beauty I was around. Influenced by many exponential teachers and mentors, as a kid and even now I’ve always been inspired to be a better citizen for our planet and people. At McGill University, I study International Development studies with a focus on sustainable strategies for small and medium enterprises (SMEs). Additionally, I am interested in the circular economy, decolonization practices, and how to integrate indegnious wisdom with the systems we have in place to bring more justice.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            I got involved with goLEAD to learn how to bring my ideas to life! I identify as one of those people who picks up hobbies every 2 week and can seem to stick with something fully and really wants to learn the tactics you can use to get a fully formed and thought through project. I stayed involved as a student executive because I really love how teams of diverse backgrounds collaborate and problem-solve. Teamwork can truly help us when trying to come up with solutions for today's problems. Through this program, students may befriend people that surprise them and challenge them, meet their best friend or business partner, or simply understand that we need each other in social entrepreneurship.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            The community and the people of goLEAD from the executives, members and leaders create the most enjoyable part of the program for me. I worked in two different groups through Move and Activate in the 2019-2020 year and each taught me a lot as my peers were always so different from me but all had the common goal of making the world a better place (in some same teeny way). The comradery of the bi-weekly workshops and final presentation really allows for an inspiring atmosphere which provokes the best thinking and leadership learning.
          </p>
        </div>
      </div>
    </div>
  );
}