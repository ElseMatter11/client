export interface Itrack{
    _id:number;
    name:string;
    artist:string;
    text:string;
    userId:number;
    listens:number;
    picture:string;
    audio:string;
}

export interface TrackState {
    tracks:Itrack[];
    error:string;
}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROOR = 'FETCH_TRACKS_ERROOR',
}

interface FetchTracksAction {
    type: TrackActionTypes.FETCH_TRACKS;
    playload: Itrack[]
}

interface FetchTracksErrorAction {
    type: TrackActionTypes.FETCH_TRACKS_ERROOR;
    playload: string
}

export type TrackAction = FetchTracksAction | FetchTracksErrorAction