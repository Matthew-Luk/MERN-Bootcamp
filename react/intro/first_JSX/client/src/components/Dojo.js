import React from "react"

const Dojo = (props) => {
    const {t1,t2,t3,t4} = props
    return (
        <div>
            <h1>Hello Dojo!</h1>
            <h2>Things I need to do:</h2>
            <ul>
                <li>{t1}</li>
                <li>{t2}</li>
                <li>{t3}</li>
                <li>{t4}</li>
            </ul>
        </div>
    )
}

export default Dojo