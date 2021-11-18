import styles from './SupporterProfile.module.css';
import { useState } from 'react';
export default function SupporterEditor(props){
  const [editMode, setEditMode] = useState(false);



  const InfoParagraph = ({header, subtitle}) => {
    return(
      <div className = {styles.aboutBox}>
        <h1 className = {styles.textMediumBold}>{header}</h1>
        <p className = {styles.textSmall}>{subtitle}</p>
      </div>
    )
  }
  
  const InfoParagraphEditor = ({header, subtitle}) => {
    return(
      <div className ={styles.aboutBox}>
        <h1 className = {styles.textMediumBold}>{header}</h1>
        <textarea type="text" className = {styles.textSmall} rows = "3" placeholder = {subtitle}></textarea>
      </div>
    )
  }
 
  if (editMode){
    return(
      <div className = {styles.rowBox}>
        <div className = {styles.mainInfoColBox}>
          <div className = {`${styles.circleContainer} ${styles.one}`}/>
            <input type = "text" className = {`${styles.textLarge} ${styles.inputWidth}`} placeholder = "Name"></input>
            <input type = "text" className = {`${styles.textMediumLight} ${styles.inputWidth}`}  placeholder = "Speciality"></input>
            <input type = "text" className = {`${styles.textMediumLight} ${styles.inputWidth}`} placeholder = "Language"></input>
        </div>
        <div className = {styles.mainInfoColBox}>
          <InfoParagraphEditor header = {"About Me"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraphEditor>
          <InfoParagraphEditor header = {"Why I Joined PeerUp"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraphEditor>
        </div>
        <div className = {styles.mainInfoColBox}>
          <button onClick = {() => setEditMode(false)} className = {`${styles.circleContainer} ${styles.editButton}`}>
            <p className = {styles.textMediumBold}>Save</p>
          </button>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className = {styles.rowBox}>
        <div className = {styles.mainInfoColBox}>
          <div className = {`${styles.circleContainer} ${styles.one}`}/>
          <h1 className = {styles.textLarge}>Name</h1>
          <h2 className = {styles.textMediumLight}>Speciality</h2>
          <h2 className = {styles.textMediumLight}>Language</h2>
        </div>
        <div className = {styles.mainInfoColBox}>
          <InfoParagraph header = {"Abot Me"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraph>
          <InfoParagraph header = {"Why I Joined PeerUp"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraph>
        </div>
        <div className = {styles.mainInfoColBox}>
          <button onClick = {() => setEditMode(true)}  className = {`${styles.circleContainer} ${styles.editButton}`}>
            <p className = {styles.textMediumBold}>Edit</p>
          </button>
        </div>
      </div>
    )
  }
}