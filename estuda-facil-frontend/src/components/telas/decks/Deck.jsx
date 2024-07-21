import { useState, useEffect } from 'react';
import DeckContext from './DeckContext';
import { getDecksAPI, getDeckPorCodigoAPI, deleteDeckPorCodigoAPI, cadastraDeckAPI } from '../../../services/DeckServico';
import Tabela from "./Tabela";
//import Form from "./Form";

function Deck() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);

    const recuperaDecks = async () => {
        setListaObjetos(await getDecksAPI());
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteDeckPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message })
            recuperaDecks();
        }
    }

    useEffect(() => {
        recuperaDecks();
    }, []);

    return (
        <DeckContext.Provider value={
            {
                alerta, setAlerta,
                listaObjetos,
                remover
            }
        }>
            <Tabela/>
        </DeckContext.Provider>
    );
}

export default Deck;