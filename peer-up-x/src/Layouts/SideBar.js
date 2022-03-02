import styles from './SideBar.module.css';
import { Link } from 'react-router-dom';

export default function SideBar(props){
  return(
    <div className = {styles.fullPageCol}>
      <img src = "/peerup_logo_square.png" alt = "Logo" width = "130" height = "130" className={styles.logo}/>
      <Link to = "/dashboard" 
        className = {`${styles.textMediumLight} ${styles.verticalMargin} ${props.profile? styles.greyText: ''}`}>Dashboard
      </Link>
      <Link to = "/profile"
        className = {`${styles.textMediumLight} ${styles.verticalMargin} ${props.dashboard? styles.greyText: ''}`}>Profile
      </Link>
    </div>
  )
}