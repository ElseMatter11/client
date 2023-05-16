import Navbar from "@/components/navbar"
import { Box, Button, Card, Grid } from "@material-ui/core"
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"
import { Itrack } from "@/types/track"
import TrackList from "@/components/TrackList"
import Player from "@/components/Player"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { useActions } from "@/hooks/useActions"

const Index=()=>{
    const tracks:Itrack[]=[
        { _id:1,
            name:'qq',
            artist:'drgdrg',
            text:'ergdrg',
            userId:1,
            listens:0,
            picture:'http://localhost:5000/image/7dd77287-ac2f-4692-bd5d-6a15111e2832.jpg',
            audio:'http://localhost:5000/audio/60d666c5-d64f-43ad-9a69-22a611cad5d8.mp3',},
            { _id:2,
                name:'q-qulac',
                artist:'drgdrg',
                text:'ergdrg',
                userId:1,
                listens:0,
                picture:'http://localhost:5000/image/7dd77287-ac2f-4692-bd5d-6a15111e2832.jpg',
                audio:'http://localhost:5000/audio/60d666c5-d64f-43ad-9a69-22a611cad5d8.mp3',}
    ]
    const router = useRouter()
    const {} = useActions();
    return<>
    <Navbar></Navbar>
    <div className={styles.center}> 
    <Grid container justifyContent='center'>
        <Card style={{width:900}}>
            <Box p={3}>
            <Grid container justifyContent='space-between'>
                <h1>Track list</h1>
                <Button onClick={()=> router.push('/track/create')}>Upload</Button>
            </Grid>
            </Box>
            <TrackList tracks={tracks}></TrackList>
        </Card>
    </Grid>
    </div>
    <Player></Player>
    </>
}

export default Index