import { TrackAction, TrackActionTypes, TrackState } from "@/types/track"
import { error } from "console"

const initialState: TrackState = {
    tracks:[],
    error:''
}

export const trackReducer = (state = initialState,action: TrackAction):TrackState => {
    switch(action.type){
        case TrackActionTypes.FETCH_TRACKS_ERROOR:
            return {...state, error:action.playload}
        case TrackActionTypes.FETCH_TRACKS:
            return {error:'',tracks:action.playload}
        default:
            return state
    }
}