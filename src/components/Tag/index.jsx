import '../../style/index.css'
import '../../style/Tag.css'

function Tag(props) {
    return (
        <span className='tag'>{props.tagName}</span>
    )
}

export default Tag