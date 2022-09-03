import '../styles/Body.css'
import SideNavbar from '../components/PeopleSideNavbar';

function People() {
  return (
    <div className = "body-root">
      <div className='body-content'>
        
        <div className="banner">
          <img src={require("../images/golead-people.png")} alt="goLEAD" height="auto" width="100%"></img>
        </div>
        
        <div className='side-panel'>
          <SideNavbar />
        </div>

        <div className="content-with-side-panel">
          <div>
            <h1>Facilitators</h1>
          </div>
          <div className="break"></div>

          <div className="two-panel">
            <img className="people-img" src={require("../images/facilitators/nate-quitoriano.jpg")} alt="nate-quitoriano"></img>
          </div>
          <div className="two-panel">
            <h2>Nate Quitoriano</h2>
            <p>Associate Professor<br/>
               Mining and Materials Engineering</p>
            <p>Associate Professor Quitoriano is the founding director of goLEAD and has been involved in leadership activities since 1993. He has been involved in starting several organizations and has learned greatly from those experiences. His research background is in semiconductor growth and devices.</p>
            <p>In October 2016, he was asked to start a leadership initiative by Dean Nicell and began by surveying the leadership learning opportunities around campus. After attending many of the existing workshops he found that there was a missing niche, applied leadership skill development, and thus developed the MOVE program which gives students a project-based learning experience.</p>
            <p>Prof. Quitoriano loves interacting with members of the goLEAD organization as a teacher and mentor at all levels. He is thankful that students show enthusiasm in the program in general and is most grateful to the students and volunteers who have helped to establish and maintain the offerings of goLEAD.</p>
          </div>
          <div className="break"></div>
          
          <div className="two-panel">
            <h2>Sidney Omelon</h2>
            <p>Associate Professor<br/>
                Mining and Materials Engineering</p>
            <img className="people-img" src={require("../images/facilitators/sidney-omelon.jpg")} alt="sidney-omelon"></img>
          </div>
          <div className="two-panel">
            <p>Associate Professor, Mining and Materials Engineering. I worked as a process engineer for an engineering consulting company, and was the first chemical engineer at a green-tech start-up in Silicon Valley before working in academia. Rowing and coaching in university were some of the extra-curricular activities that complimented my studies.</p>
            <p>My engineering training continues to be critical to my career, however, the skills I learned outside of the classroom were also important for achieving career and life goals. Therefore I wish to contribute towards extracurricular programs such as MOVE goLEAD.</p>
            <p>Hearing the diverse range of ideas and opinions from students is my favourite aspect of being part of this program.</p>
          </div>
          <div className="break"></div>

          <div className="two-panel">
            <h2>Alex Liepins</h2>
            <p>Academic Associate<br/>
                Teaching and Learning Services (TLS)</p>
            <img className="people-img" src={require("../images/facilitators/alex-liepins.jpg")} alt="alex-liepins"></img>
          </div>
          <div className="two-panel">
            <p>As an Academic Associate in Teaching and Learning Services, Dr. Liepins oversees the development and implementation of the SKILLS21 and SKILLSETS programs. His academic background is in the history of philosophy and he received his BA from Wisconsin Lutheran College in 2009, MA from Memorial University of Newfoundland in 2011, and PhD from the University of Ottawa in 2017. Dr. Liepins recently co-edited Developing Change Agents: Innovative Practices for Sustainability Leadership (2019) and is currently working on projects related to learning strategy capacity-building and graduate student teaching development.</p>
            <p>I was excited to get involved in the MOVE program to support students by leveraging my knowledge and background in student development programming to help them achieve their goals.</p>
            <p>I am always eager to interact with students and learn about the interesting challenges they are tackling through interdisciplinary collaboration.</p>
          </div>
          <div className="break"></div>

          <div className="two-panel">
            <h2>Larissa Jarvis</h2>
            <p>Research Associate<br/>
                McGill Sustainability Systems Initiative (MSSI)</p>
            <img className="people-img" src={require("../images/facilitators/larissa-jarvis.jpg")} alt="larissa-jarvis"></img>
          </div>
          <div className="two-panel">
            <p>I am a research associate with the McGill Sustainability Systems Initiative (MSSI). My academic background is in Environmental Sciences and Water Resource Management, and before joining the MSSI team I worked with the Land Use and Global Environment (LUGE) lab at McGill and the University of British Columbia. The LUGE research group focuses on agriculture, land use, and food security, and much of my work went into building the datasets needed to help understand farming systems at the global scale. I have experience working in industry as an environmental laboratory analyst, and in an international research setting working on a drip-irrigation project with small farmers in Guyana and Saint Lucia.</p>
            <p>I became involved with goLEAD because the program is providing a great opportunity for students interested in tackling today’s big problems, and is doing so in a way that aligns with the MSSI’s sustainability-focused, multidisciplinary and action-oriented approach to research.</p>
            <p>The most enjoyable part of this process so far has been the level of energy and enthusiasm from the participants. It is also really interesting to see which problems the various groups have decided to take on, and how there are very diverse interests across the cohort. The program is also using many techniques for both teaching and evaluating projects/solutions, so it’s been a great learning experience for me as well!</p>
          </div>
          <div className="break"></div>
        </div>
      </div>
    </div>
  );
}

export default People;
