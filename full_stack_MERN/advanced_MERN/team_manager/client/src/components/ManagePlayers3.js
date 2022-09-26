import React from 'react'
import { Link } from 'react-router-dom'

const ManagePlayers3 = () => {
    return (
        <div>
            <div className='navbar1'>
                <Link to={'/players/list'}>Manage Players | </Link>
                <Link to={'/status/game/1'}> Manage Player Status</Link>
            </div>
            <div className='content2'>
                <div className='navbar3'>
                    <h1>Player Status - Game 3</h1>
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

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManagePlayers3