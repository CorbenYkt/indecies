import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <Link to="/">Coins|Currency</Link>
            <Link to="/meteo">Meteo</Link>
            <Link to="/about">Me</Link>
        </div>
    )
}
export default Navbar;
