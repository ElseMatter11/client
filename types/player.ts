import { Itrack } from "./track";

export interface PlayerState {
    active: null | Itrack;
    volume: number;
    duration: number;
    currentTime : number;
    pause: boolean;
}

export enum PlayerActionTypes{
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_ACTIVE = "SET_ACTIVE",
    SET_DURATION = "SET_DURATION",
    SET_CURRENT_TIME = "SET_CURRENT_TIME",
    SET_VOLUME="SET_VOLUME",
}

interface PlayAction{
    type:PlayerActionTypes.PLAY
}
interface PauseAction{
    type:PlayerActionTypes.PAUSE
}
interface SetActiveAction{
    type:PlayerActionTypes.SET_ACTIVE;
    playload: Itrack;
}
interface SetDurationAction{
    type:PlayerActionTypes.SET_DURATION;
    playload:number;
}
interface SetCurrentTimeAction{
    type:PlayerActionTypes.SET_CURRENT_TIME
    playload:number;
}
interface SetVolumeAction{
    type:PlayerActionTypes.SET_VOLUME;
    playload:number;
}

export type PlayerAction =
    PlayAction
    | PauseAction
    |SetActiveAction
    |SetDurationAction
    |SetCurrentTimeAction
    |SetVolumeAction