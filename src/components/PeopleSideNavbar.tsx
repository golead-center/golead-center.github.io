import '../styles/SideNavbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function PeopleSideNavbar(){

    return <div className="sidenav-root">
        <nav className="sidenav-content">
            <ActiveLink to="/people/facilitators">Facilitators</ActiveLink>
            <ActiveLink to="/people/executive-team">Executive Team</ActiveLink>
            {/* 
                <ActiveLink to="/people/past-facilitators">Past Facilitators</ActiveLink>
                <ActiveLink to="/people/past-executive">Past Exxecutive</ActiveLink>
            */}
            <ActiveLink to="/people/past-winners">Past Winners</ActiveLink>
        </nav>
    </div>
}

function ActiveLink({ to, children, ...props }: any){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname})
    return(
        <ul className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </ul>
    )
}