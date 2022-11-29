import './Map.css'
const Map = ()=>{
    return(
        <footer>
            <img id='road' src='map.jpg' alt="HTML5 Icon" style={{height:"100%",width: "100%", filter: "grayscale(50%)"}}/>
            <div id='media'>
                <i class='fa fa-facebook-official' id='fb'></i>
                <i class="fa fa-instagram" id='insta'></i>
                <i class="fa fa-snapchat" id='snap'></i>
                <i class="fa fa-pinterest-p" id='pin'></i>
                <i class="fa fa-twitter" id='twi'></i>
                <i class="fa fa-linkedin" id='link'></i>
                
            </div>
            <p id='foot'>Powered by <span style={{textDecoration: 'underline',cursor:'pointer'}} >w3.css</span></p>
        </footer>
        )
}

export default Map


