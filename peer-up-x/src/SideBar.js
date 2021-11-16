import './SideBar.css';
import { Link } from 'react-router-dom';

export default function SideBar(props){
  return(
    <div className = "full-page-col">
      <Link to = "/dashboard" 
        className = {`text-medium-light vertical-margin ${props.profile ? "grey-text": ""}`}>Dashboard
      </Link>
      <Link to = "/profile"
        className = {`text-medium-light vertical-margin ${props.dashboard ? "grey-text": ""}`}>Profile
      </Link>
    </div>
  )
}