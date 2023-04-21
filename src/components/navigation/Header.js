import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
	<>
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
			<div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src="./tintedart1.png" alt="Avatar Logo" width="100" class="rounded-pill" /> 
        <span class="navbar-text">𝓣𝓲𝓷𝓽𝓮𝓭 𝓪𝓻𝓽</span>
        </a>
				<ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" >Home</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/profile" >Profile</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/paintings" >Paintings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addnewcard" >Add painting</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favourite" >favourite 
            {/* <img alt="heart" src="./like.png" /> */}
            </Link>
          </li>
				</ul>
			</div>
		</nav>
	</>
	)
}

export default Header;