import React, { useEffect, useState } from "react";

export default function PageNationControls(props){
    const [paginas, setPaginas] = useState(undefined)
    const [page, setPage] = useState(1)

    useEffect(() => {
    async function getTotalPages(){
        let pages = (await props.TotalPage)
        let pagesAllRight = (await pages)
        setPaginas(pagesAllRight)
    }
    getTotalPages()
}, [props])

useEffect(() => {
    props.page(page)
}, [page])

    return(
            <div id="paginate">
                <div className="controls">
                    <button className="first" onClick={() => {                        
                        setPage(1)}
                    }>&#171;</button>

                    <button className="prev" onClick={() => {
                        page <= 1 ? setPage(1) : setPage(page => page - 1)}
                    }>{"<"}</button>

                    <div className="numbers">
                        <div>{page} ate {paginas}</div>
                    </div>

                    <button type="button" className="next" onClick={() => {
                        page >= paginas ? setPage(paginas) : setPage(page + 1)}
                    }>{">"}</button>

                    <button className="last" onClick={() => {
                        setPage(paginas)}
                    }>&#187;</button>
                </div>
            </div>
 )
}