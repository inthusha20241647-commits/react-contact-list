import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import search from "./images/search.png";
import jesika from "./images/jesika.jpg";
import caroline from "./images/caroline.jpg";
import sam from "./images/sam.jpg";
import Tamara from "./images/Tamara.jpg";
import komeil from "./images/komeil.jpg";
import patrick from "./images/patrick.jpg";

function ContactSearch() {
  return (
    <>
      <div id="search">
        <div className="search-bar">
          <p>Search</p>
          <img src={search} alt="search-icon"></img>
        </div>
      </div>
    </>
  );
}

function ContactOne(props) {
  return (
    <div id="container">
      <div id="container-contact">
        <img src={props.profile} alt="komeil"></img>
        <div id="container-contact-desc">
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
      <div id="container-time">
        <p>{props.time}</p>
        <p>⭐</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

var contacts=[
  {
    profile:jesika,
    name:"Jesika",
    description:"Hey, Joel , I'm here to help you!",
    time:"11.15"
  },
   {
    profile:caroline,
    name:"Carole",
    description:"Hey, David, I'm here to help you!",
    time:"02.30"
  },
  {
    profile:komeil,
    name:"Komeil",
    description:"Hey, Robert, can you help me?",
    time:"12.30"
  },
  {
    profile:Tamara,
    name:"Tamara",
    description:"Hi, Martin, see you tomorrow!",
    time:"08.30"

  },
  {
    profile:patrick,
    name:"Robert",
    description:"Hi, Samuel, I'll call you later!",
    time:"18.00"
  },
  
  {
    profile:sam,
    name:"Daniel",
    description:"Hi, Joseph, let's talk later!",
    time:"06.30"
  }
]


root.render(
  <div>


    <ContactSearch></ContactSearch>
    {
      contacts.map(function(item){
      return <ContactOne name={item.name} desc={item.description} time={item.time} profile={item.profile}></ContactOne>
})

    }
    
  </div>
);
