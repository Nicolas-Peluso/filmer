import React, { useEffect, useState } from "react";

export default function PageNationControls(props){
    const [paginas, setPaginas] = useState(undefined)

useEffect(() => {
    async function getTotalPages(){
        let pages = (await props.TotalPage)
        let pagesAllRight = (await pages)
        setPaginas(pagesAllRight)
        console.log("paginas", paginas)
    }
    getTotalPages()
})
const state = {
    page: 1,
    totalPage: paginas
}

const controls = {

    next(){
        state.page++
        
        if(state.page > state.totalPage){
            state.page = state.totalPage - 1
        }
        update()
    },

    prev(){
        state.page--
        if(state.page <= 1){
            state.page = 2
        }
        update()
    },

    goTo(page){
        state.page = page
        
        if(page < 1){
            state.page = 1

        }
        if(page > state.totalPage){
            state.page = state.totalPage
        }
        update()
    },
}

function update(){
    console.log("update", state.page) 
    return state.page
}
    return(
            <div id="paginate">
                <div class="list">
                    
                </div>
                <div class="controls">
                    <button class="first" onClick={
                        () => {
                            props.page(state.page)
                            controls.goTo(1)
                         }
                    }>&#171;</button>
                    <button class="prev" onClick={
                        () => controls.prev(props.page(state.page - 1))
                        
                    }>{"<"}</button>
                    <div class="numbers">
                        <div>1</div>
                    </div>
                    <button type="button" class="next" onClick={
                        () => {
                            props.page(state.page + 1)
                            controls.next()
                        }
                        
                    }>{">"}</button>
                    <button class="last" onClick={
                        () => {
                            props.page(state.page)
                            controls.goTo(state.totalPage)
                        }
                    }>&#187;</button>
                </div>
            </div>
 )
    
}