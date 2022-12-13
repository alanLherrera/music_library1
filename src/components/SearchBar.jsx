// SeachBar.js
import { useState, useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'


function SeachBar(props) {
    const { term, handleSearch } = useContext(SearchContext)
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form>

            <input ref={term} placeholder="Enter a search term here" />

            <input type="submit" onClick={(e) => props.handleSearch(e, term.current.value)}/>

        </form>
    )
}

export default SeachBar