import './Members.css'
const Members = (props)=>{
    return(
        <div classNAme='members' style={{width: "150px",textAlign: 'center'}}>
            <p>{props.name}</p>
            <br/>
            <img id='member' src="/bandmember.jpg" alt='error'></img> 
        </div>

        
    )
}

export default Members


