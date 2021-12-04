import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import home from '../assets/home.png';

export default function Beers(props) {

    const [beers, setBeers] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const[search, setSearch] = useState("")

    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            setBeers(response.data)
            setIsLoading(false)
          })
          .catch(console.log)
      }, []); 

      const handleInput = (event)=> {
          setSearch(event.target.value)
          axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
          .then(response => setBeers(response.data))
      }

    return(
        <div>
            <header>
            <Link to ="/"><img src={home} alt="home" /></Link>
            </header>
            <div>Beer Search: <input type="text" name="search" onChange={handleInput} value={search} /></div>

            <div className="beer-container">
                {isLoading === false && beers.map((beer)=>{
                    return (
                        <div>
                            {<Link to={`/beers/${beer.id}`}><img sr={beer.image_url} alt={beer.name}  height="200px"/> </Link>}    
                            <div>
                                <p>{beer.name}</p>
                                <p>{beer.tagline}</p>
                                <p>Creator: {beer.contributed_by}</p>
                            </div>
                         </div>
                    )
                })}
            </div>

        </div>
    )
}

