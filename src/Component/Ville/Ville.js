import './Ville.css'
const Ville = (props)=>{
    return(
        <div className="ville">
            <img id='image' src={props.imageUri} alt="HTML5 Icon" style={{height:"170px",width: "237px"}}/>
            <div className="ville1">
                <h4 style={{fontWeight:"bold"}}> {props.ville}</h4><br></br>
                <p style={{color: "gray"}}> {props.date}</p><br></br>
                <p style={{fontSize:"14px", lineHeight:"2"}}> Praesent tincidunt sed tellus ut<br></br> rutrum sed vitae justo.</p><br></br>
                <button class="btto">Buy Tickets</button>
            </div>
        </div>

        
    )
}


export default Ville


