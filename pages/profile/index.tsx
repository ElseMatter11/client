import Navbar from '@/components/navbar';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
 const Profile = () => {
    const route = useRouter()
    return(
        
        <><Navbar></Navbar>
        <div>
        <Grid container direction="column" style={{marginLeft:'30%', marginTop:100, width:500}}>
            <TextField
                style={{ marginTop: 10 }}
                label={"login"}></TextField>
            <TextField
                style={{ marginTop: 10 }}
                label={"password"}></TextField>
            <Button onClick={()=>route.push('//')}>Confirm</Button>
            <Button onClick={()=> route.push('/profile/create')}>Create an account</Button>
        </Grid>
        </div></>
    )
 }
 export default Profile