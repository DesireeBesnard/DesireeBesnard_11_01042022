import '../../style/index.css'
import '../../style/Dropdown.css'

function Dropdown(props) {

    const handleToggle = (e) => {
        const content = e.target.querySelector('.dropdown .dropdownContent')

        content.classList.toggle('open')
    }

    return (
        <div className='dropdown' onClick={handleToggle}>
            <h2>{props.title}</h2>
            <img className='dropdownIcon' src={process.env.PUBLIC_URL + '/assets/dropdown.png'} alt="dropdown icon" />
            <div className='dropdownContent'>
                {props.content}
            </div>
        </div>
    )

}
 
export default Dropdown