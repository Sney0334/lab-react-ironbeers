import {Link} from "react-router-dom";
import React from "react";
import beers from "../assets/beers.png";
import newBeers from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import Navbar from "../components/Navbar"

export default function Home(){

    return(
        <div>
            <header>
                <Navbar/>
                </header>
            <div className= "allBeers">
            <Link to="/beers"> <img src={beers} alt="Beers" /> </Link>
            <h1>All Beers</h1>
            <p>Here you can find all the beers</p>
            </div>

            <div className="RandomBeer">
                <Link to="/randomBeer"> <img src={randomBeer} alt="RandomBeer" /> </Link>
                <h1>Random Beer</h1>
                <p>Here you can find Random beer. Just for fun.</p>
            </div>

            <div className="NewBeers">
                <Link to="/new-beer"><img src={newBeers} alt="New Beers" /></Link>
                <h1>New Beers</h1>
                <p>Here you can Create New Beer</p>
            </div>
        </div>
    )
}