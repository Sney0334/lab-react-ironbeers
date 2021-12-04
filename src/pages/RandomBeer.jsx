import React from 'react'
import { Link} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';
import home from '../assets/home.png'


export default function RandomBeer(props){
    
    const [isLoading, setIsLoading] = useState(true)
    const [beer, setBeer] = useState({})

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response)=>{
            setBeer(response.data)
            setIsLoading(false)
        })
        .catch(console.log)
    }
    ,[])


    return (
        <div>
            <header>
                <Link to='/'><img src={home} alt="Home"></img></Link>
            </header>

            {isLoading === false &&
                <div>
                
                    <img src={beer.image_url} alt={beer.name} height="200px"></img>
                    <div>
                        <div><span>{beer.name}</span><span>{beer.attenuation_level}</span></div>
                        <div><span>{beer.tagline}</span><span>{beer.first_brewed}</span></div>
                        <div>{beer.description}</div>
                        <div>{beer.contributed_by}</div>
                    </div>
                </div>
            }
        </div>
    )
}