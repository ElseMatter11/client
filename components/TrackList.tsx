import { Itrack } from "@/types/track";
import { Box, Grid } from "@material-ui/core";
import React from "react";
import TrackItem from "./TrackItem";

interface TrackListProps{
    tracks:Itrack[];
}

const TrackList:React.FC<TrackListProps> = ({tracks}) => {
    return(
        <Grid container direction="column">
            <Box p={3}>
                {
                    tracks.map(track =>
                        <TrackItem key={track._id} track={track}></TrackItem>
                    )}
            </Box>
        </Grid>
    )
}

export default TrackList