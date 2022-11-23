import React from 'react'
import '../App.css'

const Tabs = (props) => {

    const {listTabs, currentTab, setCurrentTab} = props

    const tabStyle = (index) => {
        if (index === currentTab){
            return "selectedTab"
        }else{
            return "nonSelectedTab"
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTab(index)
    }

    return (
        <div className='tabsList'>
            {
                listTabs.map((item, index) => (
                    <div className={`${ tabStyle(index)}`} onClick={(e) => setSelectedTab(index)}>
                        {item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs