import {useEffect,useState} from 'react'
import axios from 'axios'

const All = (props) => {

    const {meals,setMeals,url,setUrl} = props


    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
        .then((res) => {
            console.log(res.data.meals)
            setMeals(res.data.meals)
        })
        .catch((err) => {
            console.log(`Something went wrong: ${err}`)
        })
    },[])


    const handleView = (id)=>{
        console.log(id)
        setUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    }


return (
    <div className="cards">
        {
            meals.map((item,index) => (
            <div key={index} className="card hover">
                <h2>{item.strMeal}</h2>
                <button className="btn" onClick={()=>handleView(item.idMeal)}> view </button>
            </div>
            ))
        }
    </div>
)
}

export default All