import '../../style/index.css'
import '../../style/Carrousel.css'

function Carrousel(props) {

    let images
    if (props.pictures) {
        images = props.pictures
        console.log(images)

        return (
            <section className='carrousel'>
                {images.map(image => (
                    <div className='slide'>
                        <img src={process.env.PUBLIC_URL  + image} alt="" />
                    </div>
                ))}
            </section>
        )
    }
}

export default Carrousel