import React from 'react'
import { useEffect, useState } from 'react';
import first from "./first.jpeg";
import clone from "./clone.jpg";
import MImage from "./MImage.jpg";
import gexupdate from "./gxupdate.jpg";
import Webb from "./Webb.jpg";

import './New.css'
function New() {
    // const [collapsed, setCollapsed] = React.useState(false);
  const [Theme, setTheme] = React.useState(0);
  const backgroundImages =  [first, clone, MImage, gexupdate, Webb];
//   const handleCollapse = () => {
//     setCollapsed(!collapsed);
//   };
  const changeTheme = () => {
    if (backgroundImages.length - 1 > Theme) {
      setTheme(Theme + 1);
    } else {
      setTheme(0);
    }
  };
    return (

<div className='ram'  style={{ backgroundImage: `url(${backgroundImages[Theme]})` }}><h1>cygygyx8cg</h1>
    <button onClick={changeTheme}>change</button>
</div>
  )
}

export default New