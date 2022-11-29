import './Navbar.css'
const Navbar = ()=>{
    return(
        <div className='tete'>
            <nav className="navbar">
                <p id='but'>Home</p>
                <p id='but'>Band</p>
                <p id='but'>Tour</p>
                <p id='but'>Contact</p>
                <p id='but'>More
                    <i className="fa fa-caret-down"></i>
                </p>  
            </nav>
            
            <p  className='buttt'><i class="fa fa-search"></i></p>
            
        </div>
    )
}

export default Navbar