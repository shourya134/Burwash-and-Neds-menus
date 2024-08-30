import { useEffect, useMemo, useState } from 'react'
import './food_menu.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import menuData from '../../assets/Menu.json';
import Menu from '../Menu/Menu';

const INIT_DATE =  new Date("2024-08-12"); 
// calculate the difference of days between 2 dates                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// get days from start of menu rotation
function getWeek (chosen_date) {
    const diff = dateDiffInDays(INIT_DATE, chosen_date);
    const NO_OF_WEEKS = 3;
    return Math.ceil(diff/7%NO_OF_WEEKS);
};

function Food_menu () {
    //add input for date
    const [date, setDate] = useState(new Date());
    // add input for defailt state
    const [active, setActive] = useState("1");
    const handleClick = (event) => {setActive(event.target.id);}
    const weekNumber = useMemo(() => getWeek(date), [date])
    const day = useMemo(() => {
        switch(date.getDay()) {
            case 0: return "sunday";
            case 1: return "monday";
            case 2: return "tuesday";
            case 3: return "wednesday";
            case 4: return "thursday";
            case 5: return "friday";
            case 6: return "saturday";
        }
    }, [date])
    const [menuItem, setMenuItem] = useState(null);

    useEffect(() => {
        let target;
        switch(active) {
            case "1": [target] = menuData.filter(data => data.type === "breakfast"); break;
            case "2": [target] = menuData.filter(data => data.type === "lunch" && data.week === weekNumber); break;
            case "3": [target] = menuData.filter(data => data.type === "dinner" && data.week === weekNumber); break;
        }
        setMenuItem(target[day]);
    }, [active, weekNumber, day])

    return (
        
        <div className='App'>
            <header className='forheader'>               
                <h1 className='food-menu-heading'>Burwash Dining Hall Menu</h1><br />
                <p className='food_details'><a>LUNCH AND DINNER COMMON MENU ITEMS INCLUDE SOUPS, BEVERAGES, FOOD BAR ITEMS (PIZZA/PANINI), SALAD BAR, WHOLE FRUIT AND DESSERTS <br /></a> <br />Legend: (H)– Halal, (GF) – Gluten Free, (DF) – Dairy Free, (VEG) – Vegetarian, (VGN) – Vegan <br /> <br /> PICK A DATE : <DatePicker wrapperClassName="datePicker"  selected={date} onChange={(date) => setDate(date)} /> </p>               
                <div className='outline'>
                    <button key={1} id={'1'} className={active === "1" ? "selected" : 'box'} onClick={handleClick}>Breakfast</button>
                    <button key={2} id={'2'} className={active === "2" ? "selected" : 'box'} onClick={handleClick}>Lunch</button>
                    <button key={3} id={'3'} className={active === "3" ? "selected" : 'box'} onClick={handleClick}>Dinner</button>
                </div>
                {menuItem && <Menu item={menuItem} /> }
            </header>
        </div>
        
        
        
  );
}

export {Food_menu};
