import React from "react";

const Footer = () => (
    <footer className="p-4">
        <div className="text-center">
            <small className="text-white"> Creado por <strong>Iván López</strong> para el curso de
                react <strong>c.a.c.</strong>
                <a className="p-3" href="https://github.com/lop3ziv4n/react-vite-pokedex.git">
                    <img src={"/src/assets/github.svg"} alt="github-logo" style={{width: '2rem'}}/></a></small>
        </div>
    </footer>
);

export default Footer;
