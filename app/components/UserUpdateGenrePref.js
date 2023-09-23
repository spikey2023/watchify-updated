import * as React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

export default function UserUpdateGenrePref() {
  const userGenres = useSelector((state) => state.genrePref);
  
  const dispatch = useDispatch();

  const [userGenre, updateUserGenre] = React.useState(genrePref);

  return (
    <div className="acc-genrepref-container">
      <h1>Update your saved preferences:</h1>
      <div>

      <Box sx={{display:"flex"}}>
            <FormGroup sx={{marginLeft:3, marginRight:3, display:"flex", flexDirection:"row"}}>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Action" value={28}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Adventure" value={12}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Animation" value={16}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Comedy" value={35}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Crime" value={80}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Documentary" value={99}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Drama" value={18}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Family" value={10751}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Fantasy" value={14}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="History" value={36}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Horror" value={27}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Music" value={10402}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Mystery" value={9648}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Romance" value={10749}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Science Fiction" value={878}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="TV Movie" value={10770}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Thriller" value={53}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="War" value={10752}/>
                <FormControlLabel control={<Checkbox />} sx={{width:"100pt"}} label="Western" value={37}/>
            </FormGroup>
        </Box>

      </div>
    </div>
  );
}



