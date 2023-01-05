import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";
import logo from "./logo-tienda.jpg"

const NavBar = () => {

    const fondoNavBar = {
        backgroundColor: "#cc0000 "
    },
    modificarLogo = {
        height: "70px",
        width:"80px"
    };

return (

    <>
        <div className="navbar" style = {fondoNavBar}>
            <div className="flex-1">
                <Link to="/" >
                    <img alt="logo" style={modificarLogo} src={logo} />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/" className="letras-nav">Catálogo</Link>
                    </li>
                    <li tabIndex={0}>
                        <a className="letras-nav">
                            Categoría
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 " style = {fondoNavBar}>
                            <li>
                                <Link to="/category/shonen" className="letras-nav">Shonen</Link>
                            </li>
                            <li>
                                <Link to="/category/seinen" className="letras-nav">Seinen</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </div>
        </div>
    </>
    
)
}
export default NavBar