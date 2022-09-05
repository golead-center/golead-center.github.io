import { useState } from "react";
import "../../../styles/Tab.css";

export default function EmilyChen() {
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
{/*
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
*/}
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Background</h2>
          <p>
          My position as lab manager in the Saxelab means I get to contribute to a number of exciting projects in the lab while determining my personal research interests! I received by Bachelor of Arts (Honours) from McGill University, where I studied an eclectic mix of subjects that included Data Science, Computer Science, Public Health, Urban Planning, and Neuroscience (my official major and minor combination was Urban Systems Geography and Cognitive Science). I've come to the Saxelab to pursue my interests in developmental cognitive neuroscience! In my free time, I am a violinist, singer, cook, and avid walker.
          </p>
        </div>
{/*
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

*/}
      </div>
    </div>
  );
}