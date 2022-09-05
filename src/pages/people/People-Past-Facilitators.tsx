import '../../styles/Body.css'

import PeopleSideNavbar from '../../components/PeopleSideNavbar';
import NateQuitoriano from './people-bio/nate-quitoriano';
import SidneyOmelon from './people-bio/sidney-omelon';
import AlexLiepins from './people-bio/alex-liepins';
import LarissaJarvis from './people-bio/larissa-jarvis';
import HeatherMcShane from './people-bio/heather-mcshane';

function PastFacilitators() {
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
            <h1>Facilitators</h1>
          </div>
          <hr/>
          <div className="break"></div>

          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/facilitators/heather-mcshane.jpg")} alt="heather-mcshane"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Heather McShane</h2>
            <p className='people-title'>Program Director<br/>
                                        McGill Sustainability Systems Initiative</p>
            <HeatherMcShane />
          </div>
          <div className="break"></div>

        </div>
      </div>
    </div>
  );
}

export default PastFacilitators;
