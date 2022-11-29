import axios from "axios";
import React, {useEffect, useState} from "react";

import PokemonCard from "./PokemonCard";

const NavPage = ({prevUrl, nextUrl, setPokeData, setUrl}) => {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {
                prevUrl && <button className="btn btn-outline-warning me-md-2" type="button"
                                   onClick={() => {
                                       setPokeData([])
                                       setUrl(prevUrl)
                                   }}>Previous</button>
            }
            {
                nextUrl && <button className="btn btn-outline-danger" type="button"
                                   onClick={() => {
                                       setPokeData([])
                                       setUrl(nextUrl)
                                   }}>Next</button>
            }
        </div>
    );
}

const PokemonList = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }
    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <div className="container">
            <NavPage prevUrl={prevUrl} nextUrl={nextUrl} setPokeData={setPokeData} setUrl={setUrl}/>
            {
                loading ?
                    <h1>Loading...</h1>
                    :
                    <div className="row">
                        {
                            pokeData.map((item) => (
                                <div className="col-md-4 p-3" key={item.id}>
                                    <PokemonCard key={item.id} pokemon={item}/>
                                </div>
                            ))
                        }
                    </div>
            }
            <NavPage prevUrl={prevUrl} nextUrl={nextUrl} setPokeData={setPokeData} setUrl={setUrl}/>
        </div>
    );
}

export default PokemonList;
