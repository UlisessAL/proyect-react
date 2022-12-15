import "../../css/NavBarCss.css"
import CartWidget from "../CartWidget"

const NavBar = () => {


return (

    <>

        <nav >
            <ul className="contenedor-navbar">
                <div className = "contenedor-marca">
                    <li>
                        <img className = "logo-marca" src = "https://w7.pngwing.com/pngs/319/285/png-transparent-white-line-font-apple-logo-white-heart-logo.png" alt = "logo" />
                    </li>
                    <li >
                        <a className="links-marca" href="#">Sanemi.ios</a>
                    </li>
                </div>

                <div className = "contenedor-nav">
                    <li> <a className="links-nav" href="#">Celulares nuevos</a></li>
                    <li><a className="links-nav" href="#">Celulares usados</a></li>
                    <li>
                        <CartWidget/>
                    </li>
                </div>
            </ul>
        </nav>
    
    </>
    
)
}
export default NavBar