const HelloWorld = (props) => {
    const {fruit1,fruit2,fruit3} = props
    return(
        <>
        <h1>Hello World</h1>
            <ul>
                <li>{fruit1}</li>
                <li>{fruit2}</li>
                <li>{fruit3}</li>
            </ul>
        <a href="https://www.youtube.com/watch?v=Lx3MGrafykU">Favorite Video</a>
        </>
    )
}

export default HelloWorld