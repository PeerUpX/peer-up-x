import styles from './SupporterProfile.module.css';
import { useState } from 'react';
export default function SupporterEditor(props){
  const [editMode, setEditMode] = useState(false);

  const [name, changeName] = useState("Joe Bruin");
  const [spec, changeSpec] = useState("relationships, coping");
  const [lang, changeLang] = useState("English/Chinese");
  const [about, changeAbout] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  const [why, changeWhy] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

  const InfoParagraph = ({header, subtitle}) => {
    return(
      <div className = {styles.aboutBox}>
        <h1 className = {styles.textMediumBold}>{header}</h1>
        <p className = {styles.textSmall}>{subtitle}</p>
      </div>
    )
  }
  if (editMode){
    return(
      <div className = {styles.rowBox}>
        <div className = {styles.mainInfoColBox}>
          <div className = {`${styles.circleContainer} ${styles.one}`}/>
            <input type = "text" className = {`${styles.textLarge} ${styles.inputWidth}`} value = {name} onChange = {(e) => {changeName(e.target.value)}} placeholder = "Name"></input>
            <input type = "text" className = {`${styles.textMediumLight} ${styles.inputWidth}`} value = {spec} onChange = {(e) => {changeSpec(e.target.value)}} placeholder = "Speciality"></input>
            <input type = "text" className = {`${styles.textMediumLight} ${styles.inputWidth}`} value = {lang} onChange = {(e) => {changeLang(e.target.value)}} placeholder = "Language"></input>
        </div>
        <div className = {styles.mainInfoColBox}>
          <div className ={styles.aboutBox}>
            <h1 className = {styles.textMediumBold}>About Me</h1>
            <textarea lassName = {styles.textSmall} rows = "4" cols = "25" value = {about} onChange = {(e) => {changeAbout(e.target.value)}}></textarea>
          </div>
          <div className ={styles.aboutBox}>
            <h1 className = {styles.textMediumBold}>Why I Joined PeerUp</h1>
            <textarea lassName = {styles.textSmall} rows = "4" cols = "25" value = {why} onChange = {(e) => {changeWhy(e.target.value)}}></textarea>
          </div>
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
          <h1 className = {styles.textLarge}>{name}</h1>
          <h2 className = {styles.textMediumLight}>{spec}</h2>
          <h2 className = {styles.textMediumLight}>{lang}</h2>
        </div>
        <div className = {styles.mainInfoColBox}>
          <InfoParagraph header = {"About Me"} subtitle = {about}></InfoParagraph>
          <InfoParagraph header = {"Why I Joined PeerUp"} subtitle = {why}></InfoParagraph>
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