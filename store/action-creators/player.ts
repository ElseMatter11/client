import { PlayerAction, PlayerActionTypes } from "@/types/player";
import { Itrack } from "@/types/track";

export const playTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PLAY }
}

export const pauseTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PAUSE }
}

export const setDuration = (playload:number): PlayerAction => {
    return {type: PlayerActionTypes.SET_DURATION, playload }
}

export const setVolume = (playload:number): PlayerAction => {
    return {type: PlayerActionTypes.SET_VOLUME, playload }
}

export const setCurrentTime = (playload:number): PlayerAction => {
    return {type: PlayerActionTypes.SET_CURRENT_TIME, playload }
}

export const setActiveTrack = (playload:Itrack): PlayerAction => {
    return {type: PlayerActionTypes.SET_ACTIVE, playload }
}