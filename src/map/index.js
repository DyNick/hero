import React from 'react';
import { SPRITE_SIZE } from '../config/constants';
import { connect } from 'react-redux';
import './style.css';

const getTileSprite = (type) => {
    switch (type) {
        case 0:
            return 'grass'
        case 4:
            return 'chest'
        case 3:
            return 'tree'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
    }
}
const MapTile = (props) => {
    return (
        <div className={`tile ${getTileSprite(props.tile)}`}
            style={{
                width: SPRITE_SIZE,
                height: SPRITE_SIZE,
            }}
        >
            {/* {props.tile} */}
        </div>
    )
}

const MapRow = (props) => {
    return (
        <div className='row'>
            {props.tiles.map(tile => <MapTile tile={tile} />)}
        </div>

    )
}
const Map = (props) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }} >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        tiles: state.map.tiles
    })
}
export default connect(mapStateToProps)(Map);