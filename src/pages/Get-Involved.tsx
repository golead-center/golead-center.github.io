import '../styles/Body.css'

import RegistrationPanel from '../components/RegistrationPanel';

function GetInvolved() {
  return (
    <div className = "body-root">
        <div className='body-content'>
            <div className="banner">
                <img src={require("../images/get-involved.png")} alt="goLEAD" height="auto" width="100%"></img>
            </div>
            <div className="break"></div>

            <RegistrationPanel />

            <div className="two-panel">
                <h1>Students</h1>
                <ul>
                    <li>Student Executive</li>
                    <li>Volunteer</li>
                    <li>Social Media Representative</li>
                </ul>
            </div>
            <div className="two-panel">
                <h1>Non-students</h1>
                <ul>
                    <li>Mentors</li>
                    <li>Judges</li>
                    <li>Facilitators</li>
                    <li>Contact Developers</li>
                </ul>
            </div>
            <div className="break"></div>
        </div>
    </div>
  );
}

export default GetInvolved;
