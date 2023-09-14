import React, {Fragment} from 'react'
import {AppBar, Typography, Toolbar, Tabs, Tab, Button} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';


const Header = () => {
  return (
    <React.Fragment>
        <AppBar sx={{background:"#0A0A0A"}}>
            <Toolbar>

                <MovieIcon/>
                <Typography> WATCHIFY!</Typography>
            
                <Tabs sx={{marginLeft:'auto'}} textColor='inherit'>
                    <Tab label="Home" />                   
                </Tabs>

                <Button 
                    variant="contained" 
                    sx={{background: "#1E3CA8",
                    marginLeft:'auto'}}
                    >
                        Sign In</Button>
                <Button 
                    variant="contained" 
                    sx={{marginLeft:'10px',
                    background: "#1E3CA8"}}
                    >
                        Sign Up</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header