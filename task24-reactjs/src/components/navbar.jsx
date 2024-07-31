import logo from '../assets/logo.png'
import './navbar.css' 
import { Link } from 'react-router-dom'
function Navbar(){
    return (
        <>
      <nav>
        <img className='logo' src={logo} alt="icon logo" />
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/payment"}>Categories</Link></li>
          <li><Link>About Us</Link></li>
        </ul>
      </nav>
      <div className='nav-div'></div>
    </>
    )
}

export default Navbar