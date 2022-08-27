import {useEffect} from 'react'
import axios from 'axios'

const One = (props) => {

    const {meals,setMeals,url,setUrl,dessert,setDessert} = props

    const handleExit = ()=>{
        setUrl(false)
        setDessert({})
    }

    useEffect(()=>{
        console.log("My useEffect is running")
        console.log(url)
        axios.get(url)
        .then((res) => {
            console.log(res.data.meals[0])
            setDessert(res.data.meals[0])
        })
        .catch((err) => {
            console.log(`Something went wrong: ${err}`)
        })
    },[url])

return (

    <div className="card-view">
        <h3>Name: {dessert? dessert.strMeal:'...loading'}</h3>
        <img src={dessert.strMealThumb}/>
        <button className="btn exit hover" onClick={handleExit}>&#215;</button>
    
    
    </div>
)
}

export default One