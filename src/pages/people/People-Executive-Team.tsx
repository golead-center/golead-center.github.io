import '../../styles/Body.css'

import PeopleSideNavbar from '../../components/PeopleSideNavbar';
import YeeWeiFoong from './people-bio/yeewei-foong';
import LulanShen from './people-bio/lulan-shen';
import StefanPapuc from './people-bio/stefan-papuc';
import VanjaLugonjic from './people-bio/vanja-lugonjic';

function ExecutiveTeam() {
  return (
    <div className = "body-root">
      <div className='body-content'>
        
        <div className="banner">
          <img src={require("../../images/golead-people.png")} alt="goLEAD" height="auto" width="100%"></img>
        </div>
        
        <div className='side-panel'>
          <PeopleSideNavbar />
        </div>

        <div className="content-with-side-panel">
          <div>
            <h1>Student Executive</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div>
            <h2>Co-Chairs</h2>
          </div>
          <hr/>
          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/yeewei-foong.jpg")} alt="yeewei-foong"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Yee Wei Foong</h2>
            <p className='people-title'>PhD Candidate<br/>
                                        Mining and Materials Engineering</p>
            <YeeWeiFoong />
          </div>
          <div className="break"></div>
          
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/lulan-shen.jpg")} alt="lulan-shen"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Lulan Shen</h2>
            <p className='people-title'>PhD Candidate<br/>
                                        Electrical Engineering</p>
            <LulanShen />
          </div>
          <div className="break"></div>

          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/stefan-papuc.jpg")} alt="stefan-papuc"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Stefan Papuc</h2>
            <p className='people-title'>Computer Science and Urban Studies</p>
            <StefanPapuc />
          </div>
          <div className="break"></div>

          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/vanja-lugonjic.jpg")} alt="vanja-lugonjic"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Vanja Lugonjic</h2>
            <p className='people-title'>International Development Student</p>
            <VanjaLugonjic />
          </div>
          <div className="break"></div>

        </div>
      </div>
    </div>
  );
}

export default ExecutiveTeam;
