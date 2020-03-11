import React from 'react';
import Player from '../player/index';
import Map from '../map/index';
import {tiles} from '../data/maps/1/index';
import grassImg from '../assets/grass.jpg';
import store from '../config/store'
const World = (props) => {
    store.dispatch({type: 'ADD_TILES',payload:{
        tiles,
    }})
    return (
        <div
            style={{
                position: 'relative',
                margin: '20px auto',
                // backgroundImage: `url(${grassImg})`,
                // backgroundSize: 'cover',
                backgroundColor: '#2ab02a',
                width: '800px',
                height: '400px',
            }} >
            {/* <Map tiles = {tiles}/> */}
            <Map />
            <Player />
        </div>
    )
}
export default World