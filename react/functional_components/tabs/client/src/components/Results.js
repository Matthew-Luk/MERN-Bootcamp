import React from 'react'
import '../App.css'

const Results = (props) => {
    const {listTabs,currentTab} = props

    return (
        <div className='results'>
            {listTabs[currentTab].content}
        </div>
    )
}

export default Results