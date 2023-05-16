import { Itrack } from "@/types/track";
import { Box, Card, Grid, IconButton } from "@material-ui/core";
import React from "react";
import styles from "../styles/TrackItem.module.scss"
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/useActions";

interface TrackItemProps{
    track:Itrack;
    active?:boolean;
}

const TrackItem:React.FC<TrackItemProps> = ({track,active=false}) => {
    const {playTrack,pauseTrack,setActiveTrack} = useActions()

    const play = (e:any) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }
    const rout=useRouter();
    return(
        <Card className={styles.track} onClick={() => rout.push('/track/'+track._id)}>
           <IconButton onClick={play}>
                {active
                ?<Pause/>
                :<PlayArrow/>
                }
                </IconButton>
            <img width={70} height={70} src={track.picture}></img>
            <Grid container direction="column" style={{width:200,margin:'0 20px'}}>
                <div >{track.name}</div>
                <div className={styles.artName}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={e => e.stopPropagation()} className={styles.dlt} style={{marginLeft:'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    )
}

export default TrackItem