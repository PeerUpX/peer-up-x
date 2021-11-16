import './SupporterProfile.css';
import { useState } from 'react';
export default function SupporterEditor(props){
  const [editMode, setEditMode] = useState(false);

  const InfoParagraph = ({header, subtitle}) => {
    return(
      <div className = "about-box">
        <h1 className = "text-medium-bold">{header}</h1>
        <p className = "text-small">{subtitle}</p>
      </div>
    )
  }
  
  const InfoParagraphEditor = ({header, subtitle}) => {
    return(
      <div className = "about-box">
        <h1 className = "text-medium-bold">{header}</h1>
        <input type="text" className = "text-small" placeholder = {subtitle} ></input>
      </div>
    )
  }
 
  if (editMode){
    return(
      <div className = "row-box">
        <div className = "main-info-col-box">
          <div className = "circle-container one"/>
            <input type = "text" className = "text-large input-width" placeholder = "Name"></input>
            <input type = "text" className = "text-medium-light input-width" placeholder = "Speciality"></input>
            <input type = "text" className = "text-medium-light input-width" placeholder = "Language"></input>
        </div>
        <div className = "main-info-col-box">
          <InfoParagraphEditor header = {"About Me"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraphEditor>
          <InfoParagraphEditor header = {"Why I Joined PeerUp"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraphEditor>
        </div>
        <div className = "main-info-col-box">
          <button onClick = {() => setEditMode(false)} className = "circle-container edit-button">
            <p className = "text-medium-bold">Save</p>
          </button>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className = "row-box">
        <div className = "main-info-col-box">
          <div className = "circle-container one"/>
          <h1 className = "text-large">Name</h1>
          <h2 className = "text-medium-light">Speciality</h2>
          <h2 className = "text-medium-light">Language</h2>
        </div>
        <div className = "main-info-col-box">
          <InfoParagraph header = {"Abot Me"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraph>
          <InfoParagraph header = {"Why I Joined PeerUp"} subtitle = {"aaaaaaaaaaaa"}></InfoParagraph>
        </div>
        <div className = "main-info-col-box">
          <button onClick = {() => setEditMode(true)}  className = "circle-container edit-button">
            <p className = "text-medium-bold">Edit</p>
          </button>
        </div>
      </div>
    )
  }
}