import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial/pagina-inicial.js';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <PaginaInicial />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;