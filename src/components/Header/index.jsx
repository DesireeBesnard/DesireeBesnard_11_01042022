import {Link} from 'react-router-dom'
import '../../style/index.css'
import '../../style/Header.css'

function Header() {
    return (
        <div className='container header'>
            <Link to ='/'><img src={require('../../assets/logoHeader.png')} alt='logo' className='logo' /></Link>
            <nav>
                <Link to='/' className="active">Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </nav>
        </div>

    )
}

export default Header 