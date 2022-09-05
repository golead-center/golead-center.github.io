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

        <button
          className={toggleState === 4 ? "presentation-tabs presentation-active-tabs" : "presentation-tabs"}
          onClick={() => toggleTab(4)}
        >
          Activate Winter 2021
        </button>

        <button
          className={toggleState === 5 ? "presentation-tabs presentation-active-tabs" : "presentation-tabs"}
          onClick={() => toggleTab(5)}
        >
          Launch Summer 2020
        </button>

        <button
          className={toggleState === 6 ? "presentation-tabs presentation-active-tabs" : "presentation-tabs"}
          onClick={() => toggleTab(6)}
        >
          Activate Winter 2020
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

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <div>
            <h1>Activate Winter 2021</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div className="presentation-one-panel">
            <h2>GivEZ</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5riSvb7NzWc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>TrustCare</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Sj6oEquuoes" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Stocate</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yqjwlzKHuvs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Thrive</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wAUSy5K__GA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>LianMai (Interconnect)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iv0Y-plZEJc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Connect</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/P31aI_nRRaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>SLEEP.LY</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/49HnP9fw7Po" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <div>
            <h1>Launch Summer 2020</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div className="presentation-one-panel">
            <h2>Curbside: Montreal Parking Application</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XJ9CJZIYTEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>OK Collective: Clothing Repair and fitting</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-Q9wcbHrh8c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <div>
            <h1>Activate Winter 2020</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div className="presentation-one-panel">
            <h2>ParkFirst: Montreal Parking Application</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U6O7zqZSCRw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Refile: Clothing Repair and fitting</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ha5_p41TNZE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Recycling: Recycling and Waste Sorting Program</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1w6xpTotY0I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Dispensing Solutions: Detergent Dispensers</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jbRrZPI6HzQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Peer Chef: Cooking Program</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5kx706zF2U4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="presentation-one-panel">
            <h2>Bridge2Wellness: Mental Health</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TEuhWpFrSD0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}