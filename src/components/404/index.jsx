import {Link} from 'react-router-dom'
import '../../style/404.css'

function Page404() {
    return (
        <div className='container errorContainer'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='errorRedirect'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Page404