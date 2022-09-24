import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const ManagePlayers1 = (props) => {

    const {playerList} = props
    const [btn1,setBtn1] = useState("")
    const [btn2,setBtn2] = useState("")
    const [btn3,setBtn3] = useState("")

    return (
        <div>
            <div className='navbar1'>
                <Link to={'/players/list'}>Manage Players | </Link>
                <Link to={'/status/game/1'}> Manage Player Status</Link>
            </div>
            <div className='content2'>
                <div className='navbar3'>
                    <h1>Player Status - Game 1</h1>
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
                                            <button id='playingbtn'>Playing</button>
                                            <button id='notplayingbtn'>Not Playing</button>
                                            <button id='undecidedbtn'>Undecided</button>
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

export default ManagePlayers1