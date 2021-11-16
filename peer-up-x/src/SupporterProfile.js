import './SupporterProfile.css';
import SideBar from './SideBar';
import SupporterEditor from './SupporterEditor';
export default function SupporterProfile(props){

  
  return(
    <div className = "page-container">
      <SideBar profile = {true} dashboard = {false}/>
      <div className = "right-content-container">
        <SupporterEditor/>
      </div>
    </div>

  );
}