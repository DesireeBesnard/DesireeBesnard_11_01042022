import '../../style/index.css';
import '../../style/Footer.css';

function Footer() {
    return (
        <footer>
            <div>
            <img src={process.env.PUBLIC_URL + '/assets/logoFooter.png'} alt="logo Kasa" />
            <p>©{new Date().getFullYear()} Kasa. All rights reserved</p>
            </div>
        </footer>

    )
}

export default Footer