import React, { useEffect, useState } from "react";

function Deatil(props) {
    console.log("props", props)
    
   const none = () => {
   return(
        <>

        </>
    )
}
const n = () => {
    return (
    <div className="datail">
    <section>
            {props.movie.movie_results.map(item => (
            <ul className="backgroundPoster">
            <li key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
            </li>
            <li><p>{item.overview}</p></li>
        </ul>   
            ))}
     
    </section>  
</div>
    )
}
return !props.movie ? none() : n()
}

export default Deatil;