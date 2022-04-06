import {Link} from 'react-router-dom'
import '../../style/index.css';
import '../../style/Thumb.css';

function Thumb(props) {
  return (
    <Link to ='/housing' >
      <div className='thumb' 
        style={{backgroundImage: `url(${props.cover})`}}>
          <div className="thumb-overlay"></div>
          <p>{props.title}</p>
      </div>
    </Link>
  )
}

export default Thumb