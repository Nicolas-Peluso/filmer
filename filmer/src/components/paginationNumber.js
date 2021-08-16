import React, { useEffect, useState } from "react";

export default function PageNationControls(props){
    const [paginas, setPaginas] = useState(undefined)
    const [actualpage, setActualPage] = useState(1)
    

    useEffect(() => {
        setPaginas(props.TotalPage)
}, [props.TotalPage])

useEffect(() => {
        const o = () =>{
            props.page(actualpage)
        }
    o()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[actualpage])

return paginas === undefined ? "" : 

            <div id="paginate" >
                <div className="controls">
                    <button className="first" onClick={() => {
                        setActualPage(1)}
                    }>&#171;</button>

                    <button className="prev" onClick={() => {
                        actualpage <= 1 ? setActualPage(1) : setActualPage(actualpage => actualpage - 1)}
                    }>{"<"}</button>

                    <div className="numbers">
                        <div>{actualpage} ate {paginas}</div>
                    </div>

                    <button type="button" className="next" onClick={() => {
                        actualpage >= paginas ? setActualPage(paginas) : setActualPage(actualpage + 1)}
                    }>{">"}</button>

                    <button className="last" onClick={() => {
                        setActualPage(paginas)}
                    }>&#187;</button>
                </div>
            </div>
 
}