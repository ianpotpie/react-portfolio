import { NavLink } from "react-router-dom";

function MainBar() {

    return (
        < header id="main-bar" >
            <nav className="App-header">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/personal">Personal Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/academia">Academic Projects</NavLink>
                    </li>
                </ul>
            </nav>
        </ header>
    );
}

export default MainBar;