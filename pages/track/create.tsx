
import Navbar from "@/components/navbar"
import { Button, Card, Grid, TextField } from "@material-ui/core"
import styles from './Create.module.css'
import StepWrapper from "@/components/StepWrapper"
import { useState } from "react"
import { TextFields } from "@material-ui/icons"
import FileUpload from "@/components/FileUpload"
import Player from "@/components/Player"

const Create=()=>{
    const [activeStep,setActiveStep]=useState(0);
    const next = () =>{
        if (activeStep!==2){
            setActiveStep(activeStep+1)
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
                style={{marginTop:10}}
                label={"Track name"}></TextField>
                <TextField
                style={{marginTop:10}}
                label={"Track name"}></TextField>
                <TextField
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