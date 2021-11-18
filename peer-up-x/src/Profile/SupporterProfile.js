import styles from './SupporterProfile.module.css';
import SideBar from '../SideBar';
import SupporterEditor from './SupporterEditor';
export default function SupporterProfile(props){

  
  return(
    <div className = {styles.pageContainer}>
      <SideBar profile = {true} dashboard = {false}/>
      <div className = {styles.rightContentContainer}>
        <SupporterEditor/>
      </div>
    </div>

  );
}