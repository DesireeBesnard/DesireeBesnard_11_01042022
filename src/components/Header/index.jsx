import {NavLink, Link} from 'react-router-dom'
import '../../style/index.css'
import '../../style/Header.css'

function Header() {
    return (
        <div className='container header'>
            <Link to ='/' ><img src='./assets/logoHeader.png' alt='logo' className='logo' /></Link>
            <nav>
                <NavLink to='/' className={({ isActive }) => isActive ? "link-active" : "link"}>Accueil</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? "link-active" : "link"}>A Propos</NavLink>
            </nav>
        </div>

    )
}

export default Header 