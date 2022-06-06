import './menu.css';

import React, {useState, useEffect} from "react";

import MaterialIcon from 'material-icons-react';

export default function menu() {
  return (
    <>
      <div className='menuBlock'>
        <div className='menuItem' onClick={goPageInfo}>
          <MaterialIcon icon="info_outline" size={22} color="white"/>
        </div>
        <div className='menuItem' onClick={goPageProjects}>
          <MaterialIcon icon="folder" size={22} color="white"/>
        </div>
        <div className='menuItem' onClick={goPageContacts}>
          <MaterialIcon icon="call" size={22} color="white"/>
        </div>
      </div>
    </>
  );

  function goPageInfo(){
    document.getElementById("page1").scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  function goPageProjects(){
    document.getElementById("page2").scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  function goPageContacts(){
    document.getElementById("page3").scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }
}