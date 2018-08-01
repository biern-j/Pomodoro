import React from 'react'
import puppy from '../Uber-Puppies.jpg'
import cat1 from '../cat-image.png'
import cat2 from '../sub-buzz-4872-1486132372-1.jpg'
import cat3 from '../white-kitty-cat.jpg'
import cat4 from '../kitten-wallpaper-widescreen.jpg'
import cat from '../black-and-white-kitten-wallpaper-1.jpg'

const PlayerImage = ({style, player}) =>
    player === 'O'  ?  <img style={style} src={cat}/> : player !== '' ? <img style={style} src={puppy}/> : '';

    export default PlayerImage