import '../../style/index.css'
import '../../style/Dropdown.css'

function Dropdown(props) {

    return (
        <div className='dropdown'>
            <h2>{props.title}</h2>
            <img className='dropdownIcon' src={process.env.PUBLIC_URL + '/assets/dropdown.png'} alt="dropdown icon" />
            <div className='dropdownContent'>
                {props.content}
            </div>
        </div>
    )

}

export default Dropdown