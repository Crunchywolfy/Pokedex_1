import React from "react";
import "./Pokedex.css"

const Pokedex = ()=>{
    return (
        <div className= "Pokedex">
            <div className="Pokedex-Lights">
                <div className="bolita-grande"/>
                <div className="little-light Pokedex-red"/>
                <div className="little-light Pokedex-yellow"/>
                <div className="little-light Pokedex-green"/>

            </div>
            <div className="Pokedex-Screen"></div>
            <div className="Pokedex-Actions">Actions</div>
            

        </div>
    )
}

export {Pokedex};

