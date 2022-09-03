import '../styles/Body.css'

function Home() {
  return(
    <div className = "body-root">
        <div className='body-content'>
            <div>
                <h2>We work collaboratively to support and empower people to set and achieve their goals to better the world.</h2>
            </div>
            <div className="break"></div>

            <div className="center">
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=cZYxzedSaEqvqfz4-J8J6ot35iQt7NRNvhM_tlElNN5UOTJHSjdXM1A2QzNXTENXRU8xN0pPS0IyUCQlQCN0PWcu" className="button">Move Fall 2022 Registration is now open!</a>
            </div>
            <div className="break"></div>

            <div>
                <h1>Move</h1>
            </div>
            <div className="break"></div>
            <div className="two-panel">
                <p>Move is a dynamic leadership learning program which gives you hands-on experience to make changes. In it you will form a team, choose a problem and then determine a sustainable solution. Over the course of 10 weeks, you will apply lessons of design thinking, sustainability, and the lean methodology to your chosen problem. By the end of the program, your team will present your case for a chance to win $1000.</p>
            </div>
            <div className="two-panel">
              <img src={require("../images/move.jpg")} alt="Move" height="auto" width="100%"></img>
            </div>
            <div className="break"></div>

            <div>
                <h1>Activate</h1>
            </div>
            <div className="break"></div>
            <div className="two-panel">
                <p>Activate is a dynamic leadership program which gives hands-on experience to develop a solution strategy or a business plan.  After choosing a problem, you will work in your interdisciplinary team and network with the community, industry, undergraduate and graduate students.  This program takes place over 10 weeks with 5 bi-weekly workshops giving teams time to iterate while considering sustainability and stakeholders.</p>
            </div>
            <div className="two-panel">
              <img src={require("../images/activate.jpg")} alt="Activate" height="auto" width="100%"></img>
            </div>
            <div className="break"></div>
            
            <div>
                <h1>Launch</h1>
            </div>
            <div className="break"></div>
            <div className="two-panel">
                <p>The LAUNCH Program is a 4-month project incubator that helps student groups through the process of enacting their vision, their solution.  Groups check in with their mentor weekly and meet together with all involved on a monthly basis.  The program culminates in a presentation in August.  The LAUNCH Program, which requires an application, is geared towards groups which have made significant progress in either or both the MOVE or ACTIVATE Programs but is open to all.</p>
            </div>
            <div className="two-panel">
              <img src={require("../images/launch.jpg")} alt="Launch" height="auto" width="100%"></img>
            </div>
        </div>
    </div>
  );
}

export default Home;
