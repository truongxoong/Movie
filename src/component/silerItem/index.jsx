import { NavLink } from "react-router-dom"

function ItemSiler(props) {
    const {titleItem, children, to, title} = props
    let activeStyle = {
        color:'red'
    };
    let noActiveStyle = {
        color:'black'
    };
    return <div>
        <div className='flex items-center pb-5'>
            {children}
            <NavLink 
                style={({ isActive }) =>isActive ? activeStyle : noActiveStyle}
                // {`pl-3 text-lg  font-medium`}
                to={to} className={`pl-3 text-lg  font-medium`}>{titleItem}
            </NavLink>
        </div>
    </div>
}
export default ItemSiler