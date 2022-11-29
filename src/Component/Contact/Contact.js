import './Contact.css'
const Contact = (props)=>{
    return(
        
        <div className="contact">
            <p id="titre">CONTACT</p><br></br>
            <p id="note">Fan? Drop a note!</p><br></br>

            <div className='box'>
                <div className='icone'>
                    <i class='fas fa-map-marker-alt'></i><span  style={{marginLeft:'20px'}}> Chicago, US</span><br></br>
                    <i class="fa fa-phone"></i><span  style={{marginLeft:'20px'}}>Phone: +00 151515</span><br></br>
                    <i class="fa fa-envelope"></i><span  style={{marginLeft:"20px"}}>Email: mail@mail.com</span>
                </div>

                <form >
                    <input type='text' placeholder='  Name'></input>
                    <input type='text' placeholder='  Email'></input>
                    <input id='message' type='text' placeholder='  Message'></input>
                    <div id='boc'>
                        <button id='send'>SEND</button>
                    </div>
                    
                </form>
            </div>
        </div>
        
        )
}

export default Contact


