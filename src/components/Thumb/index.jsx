import '../../style/index.css';
import '../../style/Thumb.css';

function Thumb(props) {

  return (
    <div className='thumb' 
      style={{backgroundImage: `url(${props.cover})`}}>
        <div className="thumb-overlay"></div>
        <p>{props.title}</p>
    </div>
  )
}

export default Thumb