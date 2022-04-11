import '../../style/index.css'
import '../../style/Dropdown.css'

function Dropdown(props) {

    const handleToggle = (e) => {
        const icon = e.target.querySelector('.dropdownIcon')
        const content = e.target.querySelector('.dropdownContent')

        icon.classList.toggle('display')
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