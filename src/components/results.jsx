import { useState, useMemo } from "react"

export default function Results({items, onItemSelected, query, onResultsCalculated}){

    const [results, setResults] = useState([]);
    const filteredItems = findMatch()

    function findMatch(items, query){
        console.log("hola")
    }

    return <div>
        Hola
    </div>
}