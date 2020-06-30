import React from 'react';
import Nader from './img/Nader.png'
import Marwa from './img/Marwa.png'
import Ahmed from './img/Ahmed.png'
import Mariem from './img/Mariem.png'
import Profile from './profile/profile';
import './App.css';


const profil=[
  {  fullName:"Nader" ,
  bio:"docteur",
  profession: "psy",
  src:Nader},
  {  fullName:"Marwa" ,
  bio:"Artiste",
  profession: "designeur",
  src:Marwa},
  {  fullName:"Ahmed" ,
  bio:"docteur",
  profession: "pediatre",
  src:Ahmed},
  {  fullName:"Mariem" ,
  bio:"artiste",
  profession: "écrivaine",
  src:Mariem}
   
  
] 

function App() {
  return (
    <div className="App">
     <Profile x={profil}  />

    </div>
  );
}

export default App;
