import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import Carrousel from '../Carrousel'
import Dropdown from '../Dropdown'
import Tag from '../Tag'
import Rate from '../Rate'
 
import '../../style/index.css';
import '../../style/Housing.css'

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
          setData(house)
        })
    }
    getData()
  }, [params.housingId])

  if (data.length !== 0) {
    return (
      <main className='container'>
          <Carrousel pictures ={data.pictures} />
          <section className='housingInfos'>
            <header className='housingHeader'>
              <div>
                <h1>{data['title']}</h1>
                <p>{data['location']}</p>
                <div className='tags'>
                  {data.tags.map((tag, index) => (
                    <Tag tagName= {tag} key= {index}></Tag>
                  ))}
                </div>
              </div>
  
              <div>
                <div className='host'>
                  <p>{data.host['name']}</p>
                  <img src={data.host['picture']} alt="host portrait" />
                </div>
                {/* <div>
                  <p>ratings: {data['rating']}</p>
                </div> */}
                <Rate numerator = {data['rating']} denominator = {5} name = {data['id']}/>
              </div>
            </header>
  
            <div className='descriptions'>
              <Dropdown 
                title ="Description" 
                content={
                <p>{data.description}</p>
              } />
              <Dropdown 
                title="Équipements" 
                content={
                  <ul>
                      {data.equipments.map((equipement, index) => (
                        <li key={index}>{equipement}</li>
                      ))}
                  </ul>
              } />
            </div>
          </section>
      </main>
    )
  }

}

export default Housing;