import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

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
            <button className="btn btn-outline-warning float-end" type="button"
                    onClick={() => routeChange()}>Back
            </button>
            {
                loading ?
                    <h1>Loading...</h1>
                    :
                    <div className="col-md-12">
                        <h2 className="text-center text-uppercase pb-4">{pokemon.name}</h2>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row justify-content-center pb-4">
                                    <img src={pokemon.sprites.other.dream_world.front_default} className="img-fluid"
                                         style={{width: '330px', height: '330px'}} alt={pokemon.name}/>
                                </div>
                                <div className="row justify-content-end">
                                    <h4 className="col-md">Abilities:</h4>
                                    {
                                        pokemon.abilities.map(poke => {
                                            return (
                                                <h3 className="col-md">
                                                    <span
                                                        className="badge rounded-pill text-bg-danger">{poke.ability.name}</span>
                                                </h3>
                                            )
                                        })
                                    }
                                </div>
                                <div className="row justify-content-end">
                                    <h4 className="col-md">Type:</h4>
                                    {
                                        pokemon.types.map(poke => {
                                            return (
                                                <h3 className="col-md">
                                                    <span
                                                        className="badge rounded-pill text-bg-warning">{poke.type.name}</span>
                                                </h3>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-md-4 align-self-center">
                                {
                                    pokemon.stats.map(poke => {
                                        return (
                                            <h3>
                                                {poke.stat.name}:
                                                <span
                                                    className="badge rounded-pill text-bg-primary"> {poke.base_stat}</span>
                                            </h3>
                                        )
                                    })
                                }
                                <h3>
                                    base-experience:
                                    <span
                                        className="badge rounded-pill text-bg-primary"> {pokemon.base_experience}</span>
                                </h3>
                                <h3>
                                    height:
                                    <span
                                        className="badge rounded-pill text-bg-primary"> {pokemon.height}</span>
                                </h3>
                                <h3>
                                    weight:
                                    <span
                                        className="badge rounded-pill text-bg-primary"> {pokemon.weight}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default PokemonInfo;
