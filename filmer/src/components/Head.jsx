import React from 'react'

function Head(props) {
    React.useEffect(() => {
        console.log(props)
        document.title = `Filmer | ${props.title}`
    }, [props])
    return (
        <>

        </>
    )
}

export default Head
