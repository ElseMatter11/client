import Navbar from "@/components/navbar"
import { Box, Button, Card, Grid } from "@material-ui/core"
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"
import { Itrack } from "@/types/track"
import TrackList from "@/components/TrackList"
import Player from "@/components/Player"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { useActions } from "@/hooks/useActions"
import { NextThunkDispatch, wrapper } from "@/store"
import { fetchTracks } from "@/store/action-creators/thunk"
import { RootState } from "@/store/reducers"
import { AnyAction } from "redux"
import { useEffect, useState } from "react"
import axios from "axios"



const Index=()=>{
    // const {tracks,error} = useTypedSelector(state => state.track)
    const router = useRouter()
    const {} = useActions();
    const [tracks,setTracks] = useState([])
    // if (error){
    //     return<h1>{error}</h1>
    // }
    useEffect( () => {
        const fetching =async () => {
        const response = await axios.get('http://localhost:5000/tracks')
        setTracks(response.data)
        }
        fetching()
    },[])
    console.log(tracks);
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
})