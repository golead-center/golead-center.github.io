import '../../styles/Body.css'

import PeopleSideNavbar from '../../components/PeopleSideNavbar';
import NateQuitoriano from './people-bio/nate-quitoriano';
import SidneyOmelon from './people-bio/sidney-omelon';
import AlexLiepins from './people-bio/alex-liepins';
import LarissaJarvis from './people-bio/larissa-jarvis';

function Facilitators() {
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
            <img className="people-img" src={require("../../images/facilitators/nate-quitoriano.jpg")} alt="nate-quitoriano"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Nate Quitoriano</h2>
            <p className='people-title'>Associate Professor<br/>
                                        Mining and Materials Engineering</p>
            <NateQuitoriano />
          </div>
          <div className="break"></div>
          
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/facilitators/sidney-omelon.jpg")} alt="sidney-omelon"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Sidney Omelon</h2>
            <p className='people-title'>Associate Professor<br/>
                                        Mining and Materials Engineering</p>
            <SidneyOmelon />
          </div>
          <div className="break"></div>

          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/facilitators/alex-liepins.jpg")} alt="alex-liepins"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Alex Liepins</h2>
            <p className='people-title'>Academic Associate<br/>
                                        Teaching and Learning Services (TLS)</p>
            <AlexLiepins />
          </div>
          <div className="break"></div>

          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/facilitators/larissa-jarvis.jpg")} alt="larissa-jarvis"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Larissa Jarvis</h2>
            <p className='people-title'>Research Associate<br/>
                                        McGill Sustainability Systems Initiative (MSSI)</p>
            <LarissaJarvis />
          </div>
          <div className="break"></div>

        </div>
      </div>
    </div>
  );
}

export default Facilitators;
