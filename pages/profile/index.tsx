import Navbar from '@/components/navbar';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
 const Profile = () => {
    const route = useRouter()
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [error1, setError1] = useState('');
    const validateEmail = (email:string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const validatePassword = (email:string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          );
      };

      const handleChangeEmail = (event:any) => {
        if (!validateEmail(event.target.value)) {
          setError('Email is invalid');
        } else {
          setError('');
        }
    
        setEmail(event.target.value);
      };
      const handleChangePassword = (event:any) => {
        if (!validatePassword(event.target.value)) {
          setError1('Pasword is invalid. Has minimum 8 characters in length');
        } else {
          setError1('');
        }
    
        setPassword(event.target.value);
      };
    return(
        
        <><Navbar></Navbar>
        <div>
        <Grid container direction="column" style={{marginLeft:'30%', marginTop:100, width:500}}>
            <TextField
                style={{ marginTop: 10 }}
                label={"email"}
                value={email}
                onChange={handleChangeEmail}
                ></TextField>
            <TextField
                style={{ marginTop: 10 }}
                label={"password"}
                value={password}
                onChange={handleChangePassword}
                ></TextField>
                {error && <h3 style={{color: 'red'}}>{error}</h3>}
                {error1 && <h3 style={{color: 'red'}}>{error1}</h3>}
            <Button onClick={()=>route.push('//')}>Confirm</Button>
            <Button onClick={()=> route.push('/profile/create')}>Create an account</Button>
        </Grid>
        </div></>
    )
 }
 export default Profile