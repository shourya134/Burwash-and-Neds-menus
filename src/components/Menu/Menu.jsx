import { getTitle } from "../../helpers/getTitle"

const Menu = ({item}) => {
    return (
        <div className={'serving'}>
            <ul className='content'>
                {Object.keys(item).map((key) => {
                    return (
                    <div style={{paddingBottom: 10}}>
                        <li style={{fontWeight: "bold"}}>{getTitle(key)}:</li>
                        {item[key].map((i) => {
                            return <li>{i}</li>
                        })}
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu;