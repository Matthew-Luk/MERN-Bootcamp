import {BrowserRouter as Router,Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

    const All = (props) => {
    
    const navigate = useNavigate()

    const {state,setState} = props
    
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
        .then((result)=>{
            console.log(result)
            return result.json()
        })
        .then((res)=>{
            console.log(res)
            setState(res.meals)
        })
        .catch((err)=>{
            console.log("Bad call or Other Error")
            console.log(err)
        })
    },[])

    

    const handleView = (id)=>{
        console.log(id)
        navigate(`/dessert/${id}`)
    }

    return (
        <div className="cards">

            {
            state?.map((item,idx)=>(
                <div  className="card hover" key={idx}>
                    <h2>{item.strMeal}</h2>
                    {/* <img class="dessert-preview" src={item.strMealThumb} alt="Dessert Thumbnail"/> */}
                    <button className="btn hover" onClick={()=>handleView(item.idMeal)} >view {item.name}</button>
                    {/* <Link to={ `/desserts/${item.idMeal}`}><button className="btn hover">view {item.name}</button></Link> */}
                </div>
            ))
            }
            
            
        </div>
    )
}

export default All