import { Link } from "react-router-dom";
import "./Navbar.css"; // ← Import the CSS file

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars Databank</span>
				</Link>

				<div className="ml-auto d-flex align-items-center">
					<Link to="/people" className="nav-link">People</Link>
					<Link to="/vehicles" className="nav-link">Vehicles</Link>
					<Link to="/planets" className="nav-link">Planets</Link>
					<Link to="/favorites" className="nav-link">Favorites</Link>
					
				</div>
			</div>
		</nav>
	);
};
