
import CartWidget from "../CartWidget"

const NavBar = () => {

    const fondoNavBar = {
        backgroundColor: "#cc0000 "
    }

return (

    <>

    <div className="navbar" style = {fondoNavBar}>
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl letras-nav">MangaStore</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a className="letras-nav">Catálogo</a>
                </li>
                <li tabIndex={0}>
                    <a className="letras-nav">
                        Categoría
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2 " style = {fondoNavBar}>
                        <li>
                            <a className="letras-nav">Shonen</a>
                        </li>
                        <li>
                            <a className="letras-nav">Seinen</a>
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