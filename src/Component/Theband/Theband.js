import Members from '../Members/Members'
import './Theband.css'
const Theband = ()=>{
    return(
        <div className="theband">
            <h1>THE BAND</h1>
            <p id='subtitle'>We love music</p>
            <p id='parag'>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <div className='members'>
                <Members name="Name"/>
                <Members name="Name"/>
                <Members name="Name"/>

            </div>
        </div>
    )
}

export default Theband