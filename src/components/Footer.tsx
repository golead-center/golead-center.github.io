import '../styles/Footer.css'

function Footer() {

    return(
        <div className = 'footer-root'>
            <div className='footer-content'>
                <img src={require("../images/goLEAD-white.png")} alt="goLEAD" height="100%" width="auto"></img>
                <p className="copyright-statement">Copyright &#169; 2022 goLEAD</p>
                <div>
                    <h2>Contact Us</h2>
                    <p><a href="mailto:nate.quitoriano@mcgill.ca"><b>Director: </b>Dr. Nate Quitoriano</a></p>
                    <p><a href="mailto:yeewei.foong@mail.mcgill.ca"><b>Co-Chair: </b>Yee Wei Foong</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;