import {useState} from 'react'
import '../../style/index.css'
import '../../style/Carrousel.css'

function Carrousel(props) {

    let images
    let initialPositionX = null
    let initialPositionY = null
    let diffX
    let diffY
    let moving = false


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

    const gestureStart = (e) => {
        initialPositionX = e.changedTouches[0].screenX
        initialPositionY = e.changedTouches[0].screenY
        moving = true
        console.log(e.changedTouches[0].screenX)
    }

    const gestureEnd = (e) => {
        if (moving) {
            const currentPositionX = e.changedTouches[0].screenX
            const currentPositionY = e.changedTouches[0].screenY
            diffX = currentPositionX - initialPositionX
            diffY = currentPositionY - initialPositionY
            console.log(`diffX = ${diffX}, diffY = ${diffY}`)
        }

        moving = false
        if ((diffX > 0) && (Math.abs(diffY) < 150)) {
            previousSlide()
        } else if((diffX < 0) && (Math.abs(diffY) < 150)) {
            nextSlide()
        }
    }

    

    if (props.pictures) {
        images = props.pictures

        if (props.pictures.length > 1) {
            return (
                <section className='carrousel' onTouchStart ={gestureStart} onTouchEnd={gestureEnd}>
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
        } else {
            return (
                <section className='carrousel'>
                    {images.map((image, index) => (
                        <div className={slideIndex === index + 1 ? "slide active-slide" : "slide"} key={index}>
                            <img src={process.env.PUBLIC_URL  + image} alt="" />
                        </div>
                    ))}
                </section>
            )
        }


    }
}

export default Carrousel