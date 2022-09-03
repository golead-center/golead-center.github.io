import '../styles/Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar(){

    return <div className="nav-root">
        <nav className="nav-content">
            <ul>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/about-us">About Us</ActiveLink>
                <ActiveLink to="/people/facilitators">People</ActiveLink>
                <ActiveLink to="/programs">Programs</ActiveLink>
                <ActiveLink to="/get-involved">Get Involved</ActiveLink>
                <ActiveLink to="/contact-us">Contact Us</ActiveLink>
                <ActiveLink to="/presentations">Presentations</ActiveLink>
                <ActiveLink to="/testimonials">Testimonials</ActiveLink>
            </ul>
        </nav>
    </div>
}

function ActiveLink({ to, children, ...props }: any){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}