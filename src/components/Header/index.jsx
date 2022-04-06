import {NavLink, Link} from 'react-router-dom'
import '../../style/index.css'
import '../../style/Header.css'

function Header() {
    return (
        <header className='container'>
            <Link to ='/' ><img src={process.env.PUBLIC_URL + '/assets/logoHeader.png'} alt='logo Kasa' className='logo' /></Link>
            <nav>
                <NavLink to='/' className={({ isActive }) => isActive ? "link-active" : "link"}>Accueil</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? "link-active" : "link"}>A Propos</NavLink>
            </nav>
        </header>

    )
}

export default Header 