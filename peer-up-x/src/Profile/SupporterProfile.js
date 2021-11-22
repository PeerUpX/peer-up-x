import styles from './SupporterProfile.module.css';
import SideBar from '../SideBar';
import SupporterEditor from './SupporterEditor';
import './SupporterProfile.css'

export default function SupporterProfile(props){

  
  return(
    <div className = {styles.pageContainer}>
      <SideBar profile = {true} dashboard = {false}/>
      <div className = {styles.rightContentContainer}>
        <SupporterEditor/>
    </div>
    <div className="time-table">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Monday</th>
          <th scope="col">Wednesday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">8-9 PM</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">9-10 PM</th>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  );
}