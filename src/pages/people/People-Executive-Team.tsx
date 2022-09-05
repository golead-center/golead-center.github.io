import '../../styles/Body.css'

import PeopleSideNavbar from '../../components/PeopleSideNavbar';
import YeeWeiFoong from './people-bio/yeewei-foong';
import LulanShen from './people-bio/lulan-shen';
import StefanPapuc from './people-bio/stefan-papuc';
import VanjaLugonjic from './people-bio/vanja-lugonjic';
import SatishTumulu from './people-bio/satish-tumulu';
import YannickDMello from './people-bio/yannick-dmello';
import LamaAbdulal from './people-bio/lama-abdulal';
import NeerajKatiyar from './people-bio/neeraj-katiyar';
import EmilyChen from './people-bio/emily-chen';

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

          <div>
            <h2>VP Finance & Sponsorship</h2>
          </div>
          <hr/>
          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/satish-tumulu.jpg")} alt="satish-tumulu"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Satish Kumar Tumulu</h2>
            <p className='people-title'>PhD Candidate<br/>
                                        Mining and Materials Engineering</p>
            <SatishTumulu />
          </div>
          <div className="break"></div>

          <div>
            <h2>VP Programming</h2>
          </div>
          <hr/>
          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/yannick-dmello.jpg")} alt="yannick-dmello"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Yannick D'Mello</h2>
            <p className='people-title'>PhD Candidate<br/>
                                        Engineering Physics</p>
            <YannickDMello />
          </div>
          <div className="break"></div>

          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/neeraj-katiyar.jpg")} alt="neeraj-katiyar"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Neeraj Katiyar</h2>
            <p className='people-title'>Science Education Fellow</p>
            <NeerajKatiyar />
          </div>
          <div className="break"></div>

          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/placeholder.jpg")} alt="daniiar-omurbekov"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Daniiar Omurbekov</h2>
            <p className='people-title'>Civil engineering, University of Manitoba</p>
          </div>
          <div className="break"></div>

          <div>
            <h2>VP Communications</h2>
          </div>
          <hr/>
          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/lama-abdulal.jpg")} alt="lama-abdulal"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Lama Abdulal</h2>
            <p className='people-title'>Civil Engineering, Western University</p>
            <LamaAbdulal />
          </div>
          <div className="break"></div>

          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/placeholder.jpg")} alt="nathan-nauta"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Nathan Nauta</h2>
            <p className='people-title'>Western University</p>
          </div>
          <div className="break"></div>

          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/placeholder.jpg")} alt="melanie-tham"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Melanie Tham</h2>
            <p className='people-title'>University of Toronto</p>
          </div>
          <div className="break"></div>

          <div>
            <h2>VP Chapters</h2>
          </div>
          <hr/>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/emily-chen.jpg")} alt="emily-chen"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Emily Chen</h2>
            <p className='people-title'>Senior Research Support Associate, Massachusetts Insitute of Technology (MIT)</p>
            <EmilyChen />
          </div>
          <div className="break"></div>

          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/placeholder.jpg")} alt="velice-zhong"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Velice Zhong</h2>
            <p className='people-title'>University of Toronto</p>
          </div>
          <div className="break"></div>

          <div className="break"></div>
          <div className="people-two-panel-left">
            <img className="people-img" src={require("../../images/executive/placeholder.jpg")} alt="ali-zaidi"></img>
          </div>
          <div className="people-two-panel-right">
            <h2 className='people-name'>Syed Muhammad Ali Zafar Zaidi</h2>
            <p className='people-title'>McMaster University</p>
          </div>
          <div className="break"></div>
          
        </div>

      </div>
    </div>
  );
}

export default ExecutiveTeam;
