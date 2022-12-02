import axios from "axios";
import React, {useEffect, useState} from "react";

import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const PokemonList = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const fetchPokemons = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setTotal(Math.ceil(res.data.count / 20));
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
        fetchPokemons();
    }, [url])

    return (
        <div className="container h-auto">
            <Pagination prevUrl={prevUrl} nextUrl={nextUrl} setPokeData={setPokeData} setUrl={setUrl}
                        page={page} setPage={setPage} totalPages={total}/>
            {
                loading ?
                    <Loading/>
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
            <Pagination prevUrl={prevUrl} nextUrl={nextUrl} setPokeData={setPokeData} setUrl={setUrl}/>
        </div>
    );
}

export default PokemonList;
