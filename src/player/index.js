import React from 'react';
import playerImg from '../assets/player_walk.png'
import playerReducer from './reducer';
import {connect} from 'react-redux';
import handleMovement from './movement'

const Player = (props) =>{
    return (
        <div
            style = {{
                position: 'relative',
                top:props.position[1],
                left: props.position[0],
                backgroundImage: `url(${playerImg})`,
                // backgroundPosition: '0 0',
                backgroundPosition: props.spriteLocation,
                width: '40px',
                height: '40px',
            }} >

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.player,
    }
}


export default connect(mapStateToProps)( handleMovement(Player))