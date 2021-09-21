import { useCallback, useState } from "react";

export default function Type() {
    const [letra, setLetra] = useState()

    const typeWirite = useCallback((palavra) => {
        const arrayLetras = palavra.split("")
        let TempLetra = ""
        arrayLetras.forEach((letra, i) => {
            setTimeout(() => {
                TempLetra += letra
                setLetra(TempLetra)
            }, 75 * i)
        })

    }, []
    )

    return { typeWirite, letra }
}

