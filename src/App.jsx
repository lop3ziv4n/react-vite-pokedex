import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import PokemonList from "./pages/PokemonList";
import PokemonInfo from "./pages/PokemonInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";


function App() {
    return (
        <main>
           <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PokemonList/>}/>
                    <Route path='/info/:id' element={<PokemonInfo/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </main>
    );
}

export default App;
