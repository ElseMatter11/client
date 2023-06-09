import React from "react";

interface TrackProgressProps{
    left: number;
    right: number;
    onChange : (e: any) => void;
    child:React.ReactNode; 
}

const TrackProgress: React.FC<TrackProgressProps> = ({
    left,right,onChange
}) => {
    return (
        <div style ={{display:'flex'}}>
            <input
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            type="range" />
            <div >{left}/{right}</div>
        </div>
    )
}

export default TrackProgress