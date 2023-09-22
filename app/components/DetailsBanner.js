import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


import PlayTrailer from './PlayTrailer'


const DetailsBanner = () => {

    const { mediaType,id } =useParams()
    const { data, loading } =useFetch(`/${mediaType}/${id}`)

    const { url } = useSelector((state)=> state.home)
    
    const_genres =  data?.genres?.map((genre)=>genre.id)

  return (
    <div className="detailsBanner">
        {/* {!loading ? (
            <div className="backdrop-img">
                <Img src={url.backdrop + data?.
                backdrop_path}/>
                </div>
            </div> */}
        ()
        DetailsBanner
        {/* Play Trailer button  */}
        <div 
            className='playTrailer'
            onClick={()=> {}}>
            <PlayTrailer />
            <span className="text">
                Watch Trailer
            </span>
        </div>
        <div className='overview'>
            <div className= "heading">
                Overview
            </div>
            <div className="description">
                {data.overview}
            </div>
            

        </div>
        
        </div>
  )
}

export default DetailsBanner