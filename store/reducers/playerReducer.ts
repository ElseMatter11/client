import { PlayerAction, PlayerActionTypes, PlayerState } from "@/types/player"
import {bindActionCreators} from "redux"

const intialState:PlayerState ={
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 50,
    pause: true

}
export const playerReducer = (state = intialState,action:PlayerAction):PlayerState => {
    switch (action.type){
        case PlayerActionTypes.PAUSE:
            return {...state,pause:true}
        case PlayerActionTypes.PLAY:
            return {...state,pause:false}
        case PlayerActionTypes.SET_ACTIVE:
            return {...state,active: action.playload,duration:0,currentTime:0}
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state,currentTime:action.playload}
        case PlayerActionTypes.SET_DURATION:
            return {...state,duration : action.playload}
        case PlayerActionTypes.SET_VOLUME:
            return {...state,volume: action.playload}
        default :
            return state
    }

}

