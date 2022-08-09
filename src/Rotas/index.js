import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from '../App.js';
import Entrar from '../cadastro/entrar.js';
import Cadastrar from '../cadastro/cadastrar.js';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <App />} />
                <Route path='/entrar' element={ <Entrar /> } />
                <Route path='/cadastrar' element={ <Cadastrar /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;