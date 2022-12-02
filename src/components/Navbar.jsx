import React from "react";
import pokemonLogo from "../assets/pokemon-logo.png";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-center">
            <img src={pokemonLogo} alt="pokeapi-logo" style={{width: '20rem'}}/>
        </div>
    </nav>
);

export default Navbar;
