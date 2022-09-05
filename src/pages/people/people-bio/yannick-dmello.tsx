import { useState } from "react";
import "../../../styles/Tab.css";

export default function YannickDMello() {
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
            I am a PhD candidate in Engineering Physics and co-founder of a sustainability-oriented start-up called Stocate, which completed goLead Move, Activate, and Launch. Stocate is an online platform that helps people determine the environmental, health, and local impact of their everyday purchases. My PhD research investigates how energy interacts with materials and applies these concepts to technologies like solar energy harvesting, health monitoring, and telecommunications. These two perspectives help me understand how systems can become sustainable by being efficient. I am currently a member of the PGSS Environmental Committee, the Governance Council for the Sustainability Projects Fund, and VP Programming of goLead. I also occasionally teach jive dancing and martial arts.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            The global problems that we face today need solutions. However, during my PhD, I have come to realize that the technological solutions already exist. We already know "how" to fix global warming, hunger, equal opportunity, pollution, and such issues. What is lacking is our implementation of these solutions. This requires leveraging technology to make changes in policy, commerce, and maybe even a cultural transformation. Since goLead teaches leadership in a social entrepreneurship context, it was the perfect fit for me.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            I enjoyed how the program cultivated our learning process through Move, Activate, and Launch. As aspiring social entrepreneurs, it can be difficult to find the guidance and motivation that we need to keep us moving in a positive direction. The goLead workshops gave us the tools to break down and truly understand the problem that we were trying to solve - from the team, societal, and business perspectives - and then helped us scope our proposed solution and grow the start-up toward a feasible outcome.
          </p>
        </div>
      </div>
    </div>
  );
}