import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import PokemonList from "./components/PokemonList";
import PokemonInfo from "./components/PokemonInfo";

function App() {
    return (
        <main className="bg-dark bg-opacity-75 text-light">
            <header className="col-12">
                <h1 className="text-center display-1 py-4">Pokedex</h1>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PokemonList/>}/>
                    <Route path='/info/:id' element={<PokemonInfo/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
