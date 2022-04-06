import React,{useState,useEffect} from 'react';
import Thumb from '../Thumb'
import '../../style/index.css';
import '../../style/Gallery.css';

function Gallery() {

  const [data, setData] = useState([])
  const getData = () => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <section className='gallery'>
      {
        data && data.length > 0 && data.map((housing) => (
          <Thumb
            key = {housing.id}
            cover = {housing.cover}
            title = {housing.title}
          />
        ))
      }
    </section>
  )
}

export default Gallery;

