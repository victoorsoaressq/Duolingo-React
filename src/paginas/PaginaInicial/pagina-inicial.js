import React from 'react';
import './main.css'


import Header from '../../componentes/Header/header.js';
import Main from '../../componentes/Main/main.js';

function Duolingo(){
    return(
    <div className="duolingo">

      <Header />
      <Main />

    </div>
  );
}

export default Duolingo;