import Months from '../Months/Months'
import Ville from '../Ville/Ville'
import './Tour.css'

const Tour = (props)=>{
    return(
        <div className='tour'>
            <h1 style={{color:'white'}}>TOUR DATES</h1><br></br>
            <p style={{color:'gray',textAlign:'center'}}>Remember to book your tickets!</p><br></br>

            <div style={{paddingBottom: '35px'}}>
                <Months month="September" disp="Sold Out"/>
                <Months month="October" disp="Sold Out"/>
                <Months month="November"num="3"/>
                
            </div>

            <div className='direction'>
                <Ville imageUri="paris.jpg" ville="New York" date="Fri 27 Nov 2016"/>
                <Ville imageUri="newyork.jpg" ville="Paris" date="Fri 28 Nov 2016"/>
                <Ville imageUri="sanfran.jpg" ville="San Francisco" date="Fri 27 Nov 2016"/>
            </div>
            
            
        </div>

        
    )
}

export default Tour


