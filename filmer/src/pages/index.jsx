import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import { apiKey } from "../components/main";

function App(){
    const [data, SetData] = useState([])

 async function onSearchSubmit (search) {
    let request = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${search}&page=1&include_adult=false`)
    let response = (await request).json()
    let Data = (await response)
    SetData(Data) 
    console.log(Data) // temp

}
    return(
        <>
        <Header onSubmit={onSearchSubmit} />
        <Main data={data}/>
        <Footer />
        </>
    )
}

export default App