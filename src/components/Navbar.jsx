import { Link } from "react-router-dom";
import "./Navbar.css"; // ← Import the CSS file

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/" className="navbar-logo">
					StarWars Databank
				</Link>



				<div className="ml-auto d-flex align-items-center">
					<Link to="/favorites" className="nav-link">Favorites</Link>
				</div>
			</div>
		</nav>
	);
};
