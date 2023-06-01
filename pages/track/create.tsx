
import Navbar from "@/components/navbar"
import { Button, Card, Grid, TextField } from "@material-ui/core"
import styles from './Create.module.css'
import StepWrapper from "@/components/StepWrapper"
import { use, useState } from "react"
import { TextFields } from "@material-ui/icons"
import FileUpload from "@/components/FileUpload"
import Player from "@/components/Player"
import { useInput } from "@/hooks/useInput"
import axios from "axios"
import { useRouter } from "next/router"

const Create=()=>{
    const [activeStep,setActiveStep]=useState(0);
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()
    const next = () =>{
        if (activeStep!==2){
            setActiveStep(activeStep+1)
        }else{
            const formData = new FormData()
            formData.append('name',name.value)
            formData.append('artist',artist.value)
            formData.append('text',text.value)
            formData.append('picture',picture? picture:'')
            formData.append('audio',audio? audio:'')
            axios.post('http://localhost:5000/tracks',formData).then(resp => router.push('/track'))
            .catch(e => console.log(e))
        }
        
    }
    const back = () =>{
        setActiveStep(activeStep-1)
    }
    const [picture,setPicture] = useState(null)
    const [audio,setAudio] = useState(null)
    return<>
    <Navbar></Navbar>
    <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && 
            <Grid container direction="column" style={{padding:20}}>
                <TextField
                {...name}
                style={{marginTop:10}}
                label={"Track name"}></TextField>
                <TextField
                {...artist}
                style={{marginTop:10}}
                label={"Artist"}></TextField>
                <TextField
                {...text}
                style={{marginTop:10}}
                label={"Track text"}
                multiline
                rows={3}></TextField>
            </Grid>
        }
        {activeStep === 1 && 
            <FileUpload file={''} setFile={setPicture} accept="image/*">
                <Button>Upload picture</Button>

            </FileUpload>
        }
        {activeStep === 2 && 
             <FileUpload file={''} setFile={setAudio} accept="audio/*">
             <Button>Upload Audio</Button>

         </FileUpload>
        }
    </StepWrapper>
    <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>Back</Button>
        <Button disabled={activeStep === 3} onClick={next}>Forword</Button>
    </Grid>
    
    </>
}

export default Create