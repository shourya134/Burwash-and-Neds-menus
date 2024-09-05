
import { weeks } from './neds_data'
import './neds.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';



const init_date =  "2024-08-012"; 
// calculate the difference of days between 2 dates                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

// get todays date

// get days from start of menu rotation


function get_week (chosen_date) {
    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }
    const diff = dateDiffInDays(new Date(init_date),chosen_date);
    const num_week = diff % 21;
    const num_day = diff % 7
    let curr_week;
    

    if (num_week < 7){
        // choose week 1
        curr_week = weeks[0];
        
    } else if ((7 <= num_week) && (num_week < 14)){
        // choose week 2
        curr_week = weeks[1];
        
    } else {
        // choose week 3
        curr_week = weeks[2];
       
    }

    return([curr_week,num_day])


};




function Neds () {
    //add input for date
    const [date, setDate] = useState(new Date());
    // add input for defailt state
    const [active, setActive] = useState("1");
    const handleClick = (event) => {setActive(event.target.id);}
    return (
        
        <div className='app-1'>
            
            
            <header className='for-header'>
                
                
                    
                <h1 className='food-menu-heading'>Ned's Cafe Menu</h1><br />
                <p className='food-details'>
                    
                    <a className='link' href='https://www.vicu.utoronto.ca/hospitality-services/'> Hospitality Services </a> / <a className='link' href='https://www.vicu.utoronto.ca/hospitality-services/student-meal-plans-and-dining-hall-menus/'> Student Meal Plans & Dining Hall Menus </a> / Ned's Cafe <br /> <br />

                    Ned's Café, located on the lower level of the Goldring Student Centre on Charles Street, offers students a variety of options, including sandwiches, salads, soups and grab-and-go meals.
                    <br /><br />Click the calendar below to discover our upcoming menus and bon appétit! <br />
                    <br /> <DatePicker className='calander' minDate={init_date} wrapperClassName="datePicker"  selected={date} onChange={(date) => setDate(date)} /> <br />
                        <br /> Legend: (H)– Halal, (GF) – Gluten Free, (DF) – Dairy Free, (VEG) – Vegetarian, (VGN) – Vegan
                    </p>
                
                <div className='outline'>
                    
                        <button key={1} id={'1'} className={active === "1" ? "selected" : 'box'} onClick={handleClick}>Breakfast</button>
                        <button key={2} id={'2'} className={active === "2" ? "selected" : 'box'} onClick={handleClick}>Lunch & Dinner</button>
                        {/*<button key={3} id={'3'} className={active === "3" ? "selected" : 'box'} onClick={handleClick}>Dinner</button>*/}

                
                </div>
                <div className={active === "1" ? 'serving' : 'vanish'}>
                    <ul className='content'>
                        <p><p className='type'>All Day</p>{get_week(date)[0][0][get_week(date)[1]].all_day} </p>
                        <p><p className='type'>Breakfast Sandwich</p>{get_week(date)[0][0][get_week(date)[1]].breakfast_sandwich} </p> 
                        {/*<p><p className='type'>Soup</p> {get_week(date)[0][0][get_week(date)[1]].soup}</p> 
                        <p><p className='type'>Deli Sandwich</p> {get_week(date)[0][0][get_week(date)[1]].deli_sandwich}</p> 
                        <p><p className='type'>Salad</p> {get_week(date)[0][0][get_week(date)[1]].salad}</p> */}
                         
                    </ul>
                </div>
                <div className={active === "2" ? 'serving' : 'vanish'}>
                    <ul className='content'>
                        <p><p className='type'>Soup</p> {get_week(date)[0][0][get_week(date)[1]].soup}</p> 
                        <p><p className='type'>Deli Sandwich</p> {get_week(date)[0][0][get_week(date)[1]].deli_sandwich}</p> 
                        <p><p className='type'>Salad</p> {get_week(date)[0][0][get_week(date)[1]].salad}</p>
                        <p><p className='type'>Entree</p> {get_week(date)[0][1][get_week(date)[1]].entree} </p> 
                        <p><p className='type'>Veg entree</p> {get_week(date)[0][1][get_week(date)[1]].veg_entree}</p> 
                        <p><p className='type'>Sides</p> {get_week(date)[0][1][get_week(date)[1]].side}</p> 
                        <p><p className='type'>Hot Sandwich</p> {get_week(date)[0][1][get_week(date)[1]].hot_sandwich}</p> 
                        <p><p className='type'>Hot Veg Sandwich</p>{get_week(date)[0][1][get_week(date)[1]].hot_veg_sandwich}</p> 
                    </ul>
                </div>
            </header>
        </div>
        
        
        
  );
}

export {Neds};
