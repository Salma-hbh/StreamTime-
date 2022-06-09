import { useNavigate } from "react-router-dom"
import './main.css'
const Admin=()=>{
    const navigate=useNavigate()
    return(
        <div className="buttons">
        <button className="button" onClick={()=>{navigate("/adminTour", { replace: true });}}>Create new tournament</button>
        <button className="button" onClick={()=>{navigate("/adminTour", { replace: true });}}>view a tournament's participants</button>
        <button className="button" onClick={()=>{navigate("/adminTour", { replace: true });}}>View channels</button>
        <button className="button" onClick={()=>{navigate("/adminTour", { replace: true });}}>Delete channel</button>
        </div>
    )
}
export default Admin