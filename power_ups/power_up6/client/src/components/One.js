import {useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route,Navigate,useParams,useNavigate} from 'react-router-dom'

const One = (props) => {
    const {state,setState,cardView, setCardView } = props
    let {id} = useParams()
    const navigate = useNavigate()

    console.log( `this is the id :${id}`)


    const handleExit = ()=>{

        setCardView("")
        navigate('/desserts')
    }

    useEffect(()=>{

        const subscribed = true
        


        if(!subscribed){
            return
        }

        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response)=>{
            console.log(response)
            console.log(response.data.meals[0])
            setCardView(response.data.meals[0])
            
        })
        .catch((err)=>{
                console.log("Something has gone wrong")
                console.log(err)
                navigate('/notfound')
        })

        return (()=>!subscribed)
    },[])

    return (

    <div className="card-view">

        <button className="btn exit hover" onClick={handleExit}>&#215;</button>
        <h2>{cardView.strMeal}</h2>
        {cardView.strMealThumb ? <img className="thumb" src={cardView.strMealThumb} alt="Dessert Image"/>:"...LOADING"}
        <h3>Ingredients:</h3>
        <ul>
        {
            cardView.strMeal? 

                Object.keys(cardView).filter((item)=>{return (item.match("strIngredient") && cardView[item] !== "" )}).map((item,idx)=>(cardView[item] ? <li key={idx}>{cardView[item]}</li>:null))
                
                
                
            :null
            
            
        }
        </ul>
        <h3>Directions:{cardView.strInstructions}</h3>
    </div>
)
}

export default One