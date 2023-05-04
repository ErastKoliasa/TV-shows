import { Link } from "react-router-dom";
import style from './Navbar.module.css'
const Navbar = () => {
    return(
        <nav className={style}>
            <Link className={style.link} to={"/"}>HOME</Link>
        </nav>
    )
}

export default Navbar;