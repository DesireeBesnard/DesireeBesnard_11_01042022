import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import Carrousel from '../Carrousel'
import '../../style/index.css';

function Housing() {

  let params = useParams()

  const [data, setData] = useState([])
  
  useEffect(() => {
    const getData = () => {
      fetch('../data.json'
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
          let id = params.housingId
          let house = myJson.find(housing => housing.id === id )
          console.log(house)
          setData(house)
        })
    }
    getData()
  }, [params.housingId])


  return (
    <main >
        <Carrousel pictures ={data.pictures} />
    </main>
  )
}

export default Housing;