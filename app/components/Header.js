import React, {useState,Fragment} from 'react'
import {AppBar, Typography, Toolbar, Tabs, Tab, Button} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';


const Header = () => {

    const [tabValue, settabValue] = useState()

  return (
    <React.Fragment>
        <AppBar sx={{background:"#0A0A0A"}}>
            <Toolbar>

                <MovieIcon/>
                <Typography 
                    sx={{fontSize:"2rem",fontWeight:'bold',paddingLeft:"0.5%"}}
                    color="#1E3CA8"
                    > WATCHIFY </Typography>
            
                <Tabs 
                    sx={{marginLeft:'auto'}} 
                    textColor='inherit'
                    //tabindicator color logic
                    value={tabValue}
                    onChange={(e, tabValue)=> settabValue(tabValue)}
                    // tab indicatorColor=to match theme
                    TabIndicatorProps={{ style: { background: "#1E3CA8" } }}
                    >
                    <Tab label="Home" /> 
                    <Tab label="Account" />  
                    <Tab label="Watched List" />                
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