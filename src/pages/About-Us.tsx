import '../styles/Body.css'

function AboutUs() {
  return (
    <div className = "body-root">
        <div className='body-content'>
            <div className="banner">
            <img src={require("../images/about-us.png")} alt="goLEAD" height="auto" width="100%"></img>
            </div>
            <div className="break"></div>

            <div className="center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eVY4v4qxuiE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="break"></div>

            <div>
                <h1>About goLEAD</h1>
            </div>
            <div className="break"></div>
            <div>
                <p>goLEAD offers 3 programs, Move, Activate and Launch to take student groups through the process of identifying and scoping problems through implementing their stakeholder-validated solutions.  These programs help student apply leadership and entrepreneurial skills.  We have and continue to look to partner with other organizations to offer complimentary programming to our students. While goLEAD stems from the Faculty of Engineering, we are proud that our participants, student executives and facilitators are from across the university and recognize that this diversity makes goLEAD stronger.</p>
                <ul>
                    <li>We value integrity.</li>
                    <li>We value collaborative approaches towards achieving goals.</li>
                    <li>We value experiential learning.</li>
                    <li>We seek to empower others.</li>
                    <li>We seek to listen to and serve the community.</li>
                </ul>
            </div>
            <div className="break"></div>

            <div className="panel">
                <h1>Mission & Vision</h1>
                <p>goLEAD serves as a gathering point, a resource, and a project development incubator for those in the community who seek to affect local and global change. We work collaboratively to support and empower people to set and achieve their goals to better the world. In doing so we will train future leaders, expose students to meaningful challenges, and strengthen network ties.</p>
            </div>
            <div className="panel">
                <h1>Our Values</h1>
                <ul>
                    <li>We strive for excellence.</li>
                    <li>We value diverse strengths, thoughts, and backgrounds.</li>
                    <li>We are open to possibilities.</li>
                    <li>We believe leadership can be taught.</li>
                    <li>We believe students can create solutions to the big challenges of today's world.</li>
                </ul>
            </div>
            <div className="break"></div>
        </div>
    </div>
  );
}

export default AboutUs;
