import React from "react";

const Navbar = () => {
    let imgUrl =
        "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid justify-content-center">
                <img src={imgUrl} alt="pokeapi-logo" style={{width: '20rem'}}/>
            </div>
        </nav>
    );
};

export default Navbar;
