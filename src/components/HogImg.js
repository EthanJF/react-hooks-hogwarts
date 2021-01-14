import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

import React from 'react'

const HogImg = (props) => {

    const hogImages = {augustus_gloop, babe, bailey, cherub, galaxy_note, leggo_my_eggo, peppa, piggy_smalls, piglet, porkchop, trouble, truffle_shuffle}
    const thisHogImage = props.hogName.toLowerCase().split(" ").join("_")
    
    return(
       <img className="ui card" src={hogImages[thisHogImage]} />
    )
}

export default HogImg;