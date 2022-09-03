import '../styles/Body.css'
import PresentationSideNavbar from '../components/PresentationsSideNavbar';

function Presentations() {
  return (
    <div className = "body-root">
      <div className='body-content'>
        <PresentationSideNavbar />
      </div>
    </div>
  );
}

export default Presentations;
