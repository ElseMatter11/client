import { Card, Container, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react'

interface StepWrapperProps{
    activeStep: number;
    children:React.ReactNode;
}
const steps = ['Track information','Download picture','Download track']
const StepWrapper:React.FC<StepWrapperProps> = ({activeStep,children}) => {
    return(
        <>
        <Container style={{marginTop:100}}>
            <Stepper activeStep = {activeStep}>
                {steps.map((step,index) => 
                    <Step
                        key={index}
                        completed = {activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                    )}
            </Stepper>
            <Grid container justifyContent='center' style={{margin:'70px 0',height:270}}>
                    <Card style={{width:600}}>
                        {children}
                    </Card>
            </Grid>
        </Container>
        </>
    );
}

export default StepWrapper