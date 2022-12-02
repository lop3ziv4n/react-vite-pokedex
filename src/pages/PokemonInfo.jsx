import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";

const PokemonInfo = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();

    const routeChange = () => {
        navigate(`/`);
    }

    const getPokemonById = async () => {
        const res = await axios.get(url + id);
        setPokemon(res.data);
        setLoading(false);
    }

    useEffect(() => {
        getPokemonById();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-end pb-md-3">
                <div className="col-md-1">
                    <button className="btn btn-outline-warning" type="button"
                            onClick={() => routeChange()}>Back
                    </button>
                </div>
            </div>
            {
                loading ?
                    <Loading/>
                    :
                    <div className="card bg-transparent border-white m-3">
                        <h2 className="text-center text-white text-uppercase m-4">{pokemon.name}</h2>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row justify-content-center">
                                    <img src={pokemon.sprites.other.dream_world.front_default} className="img-fluid"
                                         style={{width: '20rem', height: '20rem'}} alt={pokemon.name}/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {
                                    pokemon.stats.map(poke => {
                                        return (
                                            <h5 className="col-md-8">
                                                {poke.stat.name}:
                                                <span
                                                    className="badge rounded-pill text-bg-primary float-end"> {poke.base_stat}</span>
                                            </h5>
                                        )
                                    })
                                }
                                <h5 className="col-md-8">
                                    base-experience:
                                    <span
                                        className="badge rounded-pill text-bg-primary float-end"> {pokemon.base_experience}</span>
                                </h5>
                                <h5 className="col-md-8">
                                    height:
                                    <span
                                        className="badge rounded-pill text-bg-primary float-end"> {pokemon.height}</span>
                                </h5>
                                <h5 className="col-md-8">
                                    weight:
                                    <span
                                        className="badge rounded-pill text-bg-primary float-end"> {pokemon.weight}</span>
                                </h5>
                            </div>
                        </div>

                        <div className="row justify-content-end mb-4">
                            <div className="col-md-2">
                                <h5>Abilities:</h5>
                                {
                                    pokemon.abilities.map(poke => {
                                        return (
                                            <h4>
                                                <span
                                                    className="badge rounded-pill text-bg-danger">{poke.ability.name}</span>
                                            </h4>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-md-2">
                                <h5>Type:</h5>
                                {
                                    pokemon.types.map(poke => {
                                        return (
                                            <h4>
                                                <span
                                                    className="badge rounded-pill text-bg-warning">{poke.type.name}</span>
                                            </h4>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default PokemonInfo;
