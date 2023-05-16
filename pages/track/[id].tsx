import Navbar from "@/components/navbar";
import { Itrack } from "@/types/track";
import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";

const TrackPage = () =>{
    const track:Itrack = { _id:1,
        name:'drgdg',
        artist:'drgdrg',
        text:'ergdrg',
        userId:1,
        listens:0,
        picture:'ebdfbd',
        audio:'ebdfbd',}
    const router = useRouter();
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
            <img src={track.picture} width={200} height={200}></img>
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