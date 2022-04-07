import '../../style/index.css'
import '../../style/Dropdown.css'

function Dropdown(props) {

    const handleToggle = (e) => {

        e.target.classList.toggle('open')
        // content.classList.toggle('display')
    }

    return (
        <div className='dropdown'>
            <h2>{props.title}</h2>
            <button className='toggleDropdown' onClick={handleToggle}><img className='dropdownIcon' src={process.env.PUBLIC_URL + '/assets/dropdown.png'} alt="dropdown icon" /></button>
            <div className='dropdownContent'>
                {props.content}
            </div>
        </div>
    )

}

export default Dropdown