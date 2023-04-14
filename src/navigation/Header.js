import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
	<>
		<nav>
			<ul className="nav-list">
				<li>
					<Link to="/" >Home</Link>
				</li>
				<li>
					<Link to="/profile" >Profile</Link>
				</li>
				<li>
					<Link to="/paintings" >All Paintings</Link>
				</li>
				<li>
					<Link to="/addnewcard" >Add new card</Link>
				</li>
			</ul>
		</nav>
	</>
	)
}

export default Header;