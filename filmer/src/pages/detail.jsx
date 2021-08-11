import React from "react";


function Detail(props) {
    
   const none = () => {
   return(
       <>
       </>
    )
}
const n = () => {
console.log("detail", props)
    return (
<div className="detail" key={props.movie.movie_results.id}>
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