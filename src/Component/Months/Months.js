import './Months.css'
const Months = (props)=>{
    return(
        <div>
            
            <li class="line" ><span style={{color:"gray", backgroundColor:"white"}}>{props.month}</span>
            {
                props.disp ?
                <span style={{backgroundColor: "red", color:"white", marginLeft:"2%", padding:"4px"}}>{props.disp}</span>
                :
                null
            }

            {
                props.num ?
            
                <span style={{backgroundColor: "black", color:"white",marginLeft:"83%",padding:"3px 8px" , borderRadius:"47%"}}>{props.num}</span>
                :
                null
            }</li>
        
        </div>

        
    )
}


export default Months


