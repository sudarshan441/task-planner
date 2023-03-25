import { NavLink } from "react-router-dom";


export default function NavBar() {
    
    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
         <NavLink to="/">sprint</NavLink>
         <NavLink to="/user">user</NavLink>
         </div>
      
    )
}