import React from "react";


function Detail(props) {
    console.log("detail", props)
    
   const none = () => {
   return(
       <>
       </>
    )
}
const n = () => {
    return (
<div className="detail">

            {props.movie.movie_results.map(item => (       
        <>   
            <div className="containerImg">
                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="backGroundPoster"/>
            </div>   
            <div className="ConstainerText">
                 <p>{item.overview}</p>
            </div>
        </>
            ))}
</div>
    )
}
return !props.movie ? none() : n()
}

export default Detail;