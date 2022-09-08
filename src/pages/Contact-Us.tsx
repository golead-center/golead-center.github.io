import '../styles/Body.css'

function ContactUs() {
  return (
    <div className = "body-root">
      <div className='body-content'>
          <div className="three-panel">
            <h1>Executives</h1>
            <p>Prof. Nate Quitoriano<br/>
               <a className="body-link" href="mailto:nate.quitoriano@mcgill.ca">nate.quitoriano@mcgill.ca</a></p>
          </div>
          <div className="three-panel">
            <h1>Student Executive</h1>
            <p>Yee Wei Foong<br/>
               <a className="body-link" href="mailto:yeewei.foong@mail.mcgill.ca">yeewei.foong@mail.mcgill.ca</a></p>
            <p>Lulan Shen<br/>
               <a className="body-link" href="mailto:lulan.shen@mail.mcgill.ca">lulan.shen@mail.mcgill.ca</a></p>
            <p>Stefan Papuc<br/>
               <a className="body-link" href="mailto:stefan.papuc@mail.mcgill.ca">stefan.papuc@mail.mcgill.ca</a></p>
            <p>Vanja Lugonjic<br/>
               <a className="body-link" href="mailto:vanja.lugonjic@mail.mcgill.ca">vanja.lugonjic@mail.mcgill.ca</a></p>
          </div>
          <div className="three-panel">
            <h1>Social Media</h1>
            <p>Email<br/>
               <a className="body-link" href="mailto:golead.center@gmail.com">golead.center@gmail.com</a></p>
            <p>Facebook<br/>
               <a className="body-link" href="http://www.facebook.com/goLEAD.start">http://www.facebook.com/goLEAD.start</a></p>
            <p>LinkedIn<br/>
               <a className="body-link" href="http://www.linkedin.com/company/golead-change/">http://www.linkedin.com/company/golead-change/</a></p>
          </div>
        </div>
    </div>
  );
}

export default ContactUs;
