import {useState} from 'react'
import '../../style/index.css'
import '../../style/Carrousel.css'

function Carrousel(props) {

    let images

    const [slideIndex, setSlideIndex] = useState(1)

    const previousSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1) {
            setSlideIndex(images.length)
        }
    }

    const nextSlide = () => {
        if(slideIndex !== images.length) {
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex === images.length) {
            setSlideIndex(1)
        }
    }


    if (props.pictures) {
        images = props.pictures

        return (
            <section className='carrousel'>
                {images.map((image, index) => (
                    <div className={slideIndex === index + 1 ? "slide active-slide" : "slide"} key={index}>
                        <img src={process.env.PUBLIC_URL  + image} alt="" />
                    </div>
                ))}
                <p className='slideNumber'>{slideIndex}/{images.length}</p>
                <button className='previous' onClick= {previousSlide}><img src={process.env.PUBLIC_URL + '/assets/arrowBack.png'} alt="" /></button>
                <button className='next' onClick= {nextSlide}><img src={process.env.PUBLIC_URL + '/assets/arrowForward.png'} alt="" /></button>
            </section>
        )
    }
}

export default Carrousel