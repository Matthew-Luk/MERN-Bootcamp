import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const ManagePlayers2 = (props) => {

    const {playerList} = props
    const [btn1,setBtn1] = useState(false)
    const [btn2,setBtn2] = useState(false)
    const [btn3,setBtn3] = useState(false)

    const btn1Handler = (e) =>{
        setBtn1(true)
        setBtn2(false)
        setBtn3(false)
    }

    const btn2Handler = (e) =>{
        setBtn1(false)
        setBtn2(true)
        setBtn3(false)
    }

    const btn3Handler = (e) =>{
        setBtn1(false)
        setBtn2(false)
        setBtn3(true)
    }

    return (
        <div>
            <div className='navbar1'>
                <Link to={'/players/list'}>Manage Players | </Link>
                <Link to={'/status/game/1'}> Manage Player Status</Link>
            </div>
            <div className='content2'>
                <div className='navbar3'>
                    <h1>Player Status - Game 2</h1>
                    <div className='gamelinks'>
                        <Link to={'/status/game/1'}>Game 1| </Link>
                        <Link to={'/status/game/2'}>Game 2| </Link>
                        <Link to={'/status/game/3'}>Game 3</Link>
                    </div>
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playerList.map((item,index) => (
                                    <tr key={index}>
                                        <td className='goop'><Link to={`/players/edit/${item._id}`}>{item.name}</Link></td>
                                        <td>
                                            <button onClick={btn1Handler} id='playingbtn'>Playing</button>
                                            <button onClick={btn2Handler} id='notplayingbtn'>Not Playing</button>
                                            <button onClick={btn3Handler} id='undecidedbtn'>Undecided</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManagePlayers2