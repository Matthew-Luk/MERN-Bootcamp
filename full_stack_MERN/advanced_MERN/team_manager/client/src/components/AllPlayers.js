import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

const AllPlayers = () => {

    const [playerList,setPlayerList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then((res) => {
            console.log(res.data.players)
            setPlayerList(res.data.players)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <div className='navbar1'>
                <Link to={'/players/list'}>Manage Players | </Link>
                <Link to={'/status/game/1'}> Manage Player Status</Link>
            </div>
            <div className='content'>
                <div className='navbar2'>
                    <Link to={'/players/list'}>List | </Link>
                    <Link to={'/players/addplayer'}>Add Player</Link>
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Preferred Position</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playerList.map((item,index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.position}</td>
                                        <td><button id='deletebtn'>Delete</button></td>
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

export default AllPlayers