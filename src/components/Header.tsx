import '../styles/Header.css'

function Header() {

    return(
        <div className = 'header-root'>
            <div className='header-content'>
                <img src={require("../images/goLEAD-black.png")} alt="goLEAD" height="100%" width="auto"></img>
                <h1>Change Starts With You</h1>
            </div>
        </div>
    );
}

export default Header;