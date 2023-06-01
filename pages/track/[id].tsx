import Navbar from "@/components/navbar";
import { Itrack } from "@/types/track";
import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const TrackPage = ({serverTrack}:any) =>{
    const router = useRouter();
    const [track,setTrack] = useState(serverTrack)
    return(
    <>
        <Navbar></Navbar>
        <Grid container direction="column" style={{marginLeft:20,marginTop:100}}>
        <Button 
            variant={"outlined"}
            style={{fontSize:32}}

            onClick={() => router.push('/track')}>
            To List
        </Button>
        <Grid container style={{margin:'20px 0'}}>
            <img src={'http://localhost:5000/'+track.picture} width={200} height={200}></img>
            <div className="">
                <h1>Name - {track.name}</h1>
                <h1>Artist - {track.artist}</h1>
                <h1>Listens - {track.listens}</h1>
            </div>
        </Grid>
        <h1>Song text</h1>
        <p>{track.text}</p>
        </Grid>
    </>
    )
} 

export default TrackPage;

export const getServerSideProps:GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/3')
    return{
        
        props:{
            serverTrack: response.data
        }
    }
}