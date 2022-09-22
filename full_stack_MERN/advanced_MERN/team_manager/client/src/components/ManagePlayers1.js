import React from 'react'
import { Link } from 'react-router-dom'

const ManagePlayers1 = () => {
    return (
        <div>
            <div className='navbar1'>
                <Link to={'/players/list'}>Manage Players | </Link>
                <Link to={'/status/game/1'}> Manage Player Status</Link>
            </div>
            <div className='content2'>
                <div className='navbar3'>
                    <h2>Player Status - Game 1</h2>
                    <Link>Game 1| </Link>
                    <Link>Game 2| </Link>
                    <Link>Game 3</Link>
                </div>
            </div>
        </div>
    )
}

export default ManagePlayers1