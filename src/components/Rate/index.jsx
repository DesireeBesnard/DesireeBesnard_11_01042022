import '../../style/index.css'
import '../../style/Rate.css'

function Rate(props) {

    const rate = parseInt(props.numerator)
    const stars = []

    for (let i = 0; i < rate; i++) {
        stars.push('fa-solid fa-star')
    }
    for (let i = rate; i < props.denominator; i++) {
        stars.push('fa-solid grayStar fa-star') 
    }

    return (
        <div>
            {
                stars.map((star) => (
                    <span className= {star} key = {Math.random()*50}></span> 
                ))
            }
        </div>

    )

}
 
export default Rate