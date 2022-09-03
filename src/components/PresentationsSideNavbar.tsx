import { useState } from "react";
import "../styles/Tab.css";

export default function PresentationSideNavbar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index:any) => {
    setToggleState(index);
  };

  return (
    <div className="tab-content">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "presentation-tabs presentation-active-tabs" : "presentation-tabs"}
          onClick={() => toggleTab(1)}
        >
          Activate Winter 2022
        </button>
        <button
          className={toggleState === 2 ? "presentation-tabs presentation-active-tabs" : "presentation-tabs"}
          onClick={() => toggleTab(2)}
        >
          Move Fall 2021
        </button>
        <button
          className={toggleState === 3 ? "presentation-tabs presentation-active-tabs" : "presentation-tabs"}
          onClick={() => toggleTab(3)}
        >
          Launch Summer 2021
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div>
            <h1>Activate Winter 2022</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div className="presentation-one-panel">
            <h2>3DP Robotic Construction</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WCAmYfhqukc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Access Able</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CSPmrvFjgDk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Ecolives</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sVdEngl3Vc8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Nikwei Land Restoration</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RN-lbzYOvBY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>U-Sort</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bkxb15jdx8A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Home Chef</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lc2uIWMY2Lw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>

        
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div>
            <h1>Move Fall 2021</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div className="presentation-one-panel">
            <h2>EcoFoody</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/muzVSi-2P-Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>U-Sort</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pCxLUBtphbY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Virtual Laboratory Simulation</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sRNnHBtBwIg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Sustainable Agriculture</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oUoUp_Tp4k0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>My McTime</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fyrWt_azOiI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div>
            <h1>Launch Summer 2021</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div className="presentation-one-panel">
            <h2>TrustCare</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WsuFJTERoXo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Stocate</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RRgcFz32Xhc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>LianMai</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3LYEhzV3xdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}