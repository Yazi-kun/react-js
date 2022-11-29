const Home = ()=>{
    let name='yazi'

    const handleClick = ()=>{
        name='luigui'
    }
    /*const handleClick = ()=>{
        console.log('hello you!')
    }
    
    const handleClickAgain = (name) => {
        console.log('hello' + name);
        }
        
    inside home className
    <button onClick={()=>handleClickAgain('mario')}>Click me!</button>    */
    return(
        <div className="home">
            <h2>Home page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me!</button>
            
        </div>
    )
}

export default Home