import React from 'react'
import "./MovieDetails.css";



import DetailsBanner from "./DetailsBanner"
import { CreditScore } from '@mui/icons-material';

const timeConversion = (totalMinutes) => {
    const hours = Math.floor(totalMinutes/60)
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? `${minutes}m`:''}`
}


const MovieDetails = () => {
    // const { mediaType,id } =useParams()
    // const { data, loading } =useFetch(`/${mediaType}/${id}`)
  
  
    return (
    <> 
    <div>
        <DetailsBanner />
    </div>
    </>

  )
}

export default MovieDetails