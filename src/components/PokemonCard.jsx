import React from "react";
import {useNavigate} from "react-router-dom";

const PokemonCard = ({pokemon}) => {
    const navigate = useNavigate();

    const routeChange = (id) => {
        navigate(`/info/${id}`);
    }

    return (
        <div className="card bg-transparent border-white" style={{cursor: 'pointer'}}
             onClick={() => routeChange(pokemon.id)}>
            <div className="row">
                <div className="col-4">
                    <img src={pokemon.sprites.front_default} className="img-fluid rounded-circle"
                         alt={pokemon.name}/>
                </div>
                <div className="col-8 d-flex align-self-center">
                    <div className="card-body">
                        <h3 className="card-title text-white text-uppercase">{pokemon.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;


