import { TrackAction, TrackActionTypes } from "@/types/track"
import axios from "axios"
import { Dispatch } from "react"


export const fetchTracks = () => {
    return async(dispatch : Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({type:TrackActionTypes.FETCH_TRACKS,playload:response.data})
            console.log(response.data)
        }catch(e){
            dispatch({type:TrackActionTypes.FETCH_TRACKS_ERROOR,playload:'smth wrong'})
        }
    }
}