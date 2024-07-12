import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <nav>
            {/* // use Link tag instid of using a tag */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/login">Login</Link></li>
        </nav>
    )
}

export default Navbar;