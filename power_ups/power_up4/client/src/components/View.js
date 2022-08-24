import {useEffect} from 'react'


const View = (props) => {
    const {cardView, setCardView ,view,setView,state,setState,url,setUrl} = props

    const handleExit = ()=>{
    setUrl(false)
    setCardView("")
    }

    useEffect(()=>{

        if(!view){
            return
        }
        fetch(`${url}`)
        .then((result)=>{
            return result.json()
        })
        .then((res)=>{
            console.log(res)
            setCardView(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[view])

return (

    <div>
        <h2>{cardView.name}</h2>
        {cardView.sprites? <img src={cardView.sprites.front_default}/>:""}
        <p>Abilities: </p>
        {
            cardView.abilities?.map((item,index) => (
                <div key={index}>
                    <p>{item.ability.name}</p>
                </div>
            ))
        }
        <button onClick={handleExit}>Exit</button>
    </div>
)
}

export default View