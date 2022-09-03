import { useState } from "react";
import "../../../styles/Tab.css";

export default function StefanPapuc() {
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
            Growing up in Vancouver, BC and having mountains or the ocean in every direction the eye can see, the outdoors became woven into the fabric of my daily life. I developed a passion for urbanism, technology, and discovering better transportation methods to conserve our urban and natural landscapes. I admired the role of public transportation, what it can do for our environment, and the communities it connects. I saw opportunities where technology can improve current transportation systems, making them more accessible for all. This led me to pursue a Bachelor’s degree in Computer Science and Urban Studies. I participated in both Fall 2020 Move and Winter 2021 Activate program cohorts as a project leader for creating convenient, on-campus, student-focused infrastructure.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Why did you get involved with goLEAD?</h2>
          <p>
            Driven by creating solutions to pressing issues that face our society, I wanted to join a group of like-minded peers to build a project that can make a positive impact, big or small. I also wanted to develop my leadership and communication abilities outside of a classroom setting. The diversity of the goLEAD cohort offered an opportunity to learn and exchange ideas in an entrepreneurial environment with peers from varying cultural and academic backgrounds. I did not know where to start, but goLEAD’s immersive and supportive atmosphere made beginning the entrepreneurship journey motivating and fulfilling. As an executive, I aim to share this experience with more students and interact with individuals and teams to ensure they get the most enriching experience.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>What do you enjoy the most in the program?</h2>
          <p>
            I enjoyed the community and mentorship aspect of the program. I appreciate the commitment to team success and autonomy while providing support through excellent mentors to help clear initial hurdles and build confidence. The supportive environment made every voice in the team heard and ensured most of your time was spent learning valuable skills and turning an idea into reality.
          </p>
        </div>
      </div>
    </div>
  );
}