import React, { useRef, useState } from "react"

import getSessionID from "./GetSessionID"
import "./stylePost.css"
export default function FormPost() {

    const [ListName, setListName] = useState(" ")
    const [Description, setDescription] = useState(" ")
    const [Language, setLanguage] = useState(" ")
    const [sessionID, setsessionID] = useState(() => {
        const HasSessionID = sessionStorage.getItem("session")
        return HasSessionID ? HasSessionID : null
    });
    const [Data, setData] = useState({})
    const [border, setBorder] = useState(false)
    const NameRef = useRef()
    const DescRef = useRef()
    const LangRef = useRef()

    // let Body = {
    //    "name": ListName,
    //    "description": Description,
    //    "language": Language
    //}
    !sessionID && getSessionID().then(e => {
        sessionStorage.setItem("session", e.guest_session_id)
        console.log(e)
    })


    async function handleSubmit(e) {
        e.preventDefault()
        if (ListName && Description && Language) {
            /*  let request = await fetch(`https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionID}`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(Body)
              })
              let response = await request.json()
              let data = await response
              setData(data)*/
            setData({ nome: ListName, Descrissão: Description, idioma: Language })
            console.log(Data)
            alert("esta tudo certo mas infelizamnete nao podemos criar listas com a api que estamos usado")
            setListName("")
            setDescription("")
        } else if (!ListName) {
            NameRef.current.focus()
            setBorder(true)
        }
        else if (!Description) {
            DescRef.current.focus()
            setBorder(true)
        }
        else if (!Language) {
            LangRef.current.focus()
        }
    }
    return (
        <form onSubmit={handleSubmit} className="formulario">
            <fieldset>
                <legend><h1>Preencha Os Campos</h1></legend>
                <label>
                    Digite o Nome da lista:
                    <input
                        ref={NameRef}
                        type="text"
                        value={ListName}
                        onChange={e => {
                            setListName(e.target.value)
                        }

                        }
                    />
                </label>
                <label>
                    descreva sua lista:
                    <textarea
                        ref={DescRef}
                        rows="10"
                        value={Description}
                        onChange={e => {
                            setDescription(e.target.value)
                            setBorder(false)
                        }}
                    />
                </label>
                <label>
                    Qual o Idioma:
                    <select onChange={e => setLanguage(e.target.value)} ref={LangRef}>
                        <option value="AF" defaultValue>Afrikanns</option>
                        <option value="SQ">Albanian</option>
                        <option value="AR">Arabic</option>
                        <option value="HY">Armenian</option>
                        <option value="EU">Basque</option>
                        <option value="BN">Bengali</option>
                        <option value="BG">Bulgarian</option>
                        <option value="CA">Catalan</option>
                        <option value="KM">Cambodian</option>
                        <option value="ZH">Chinese (Mandarin)</option>
                        <option value="HR">Croation</option>
                        <option value="CS">Czech</option>
                        <option value="DA">Danish</option>
                        <option value="NL">Dutch</option>
                        <option value="EN">English</option>
                        <option value="ET">Estonian</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finnish</option>
                        <option value="FR">French</option>
                        <option value="KA">Georgian</option>
                        <option value="DE">German</option>
                        <option value="EL">Greek</option>
                        <option value="GU">Gujarati</option>
                        <option value="HE">Hebrew</option>
                        <option value="HI">Hindi</option>
                        <option value="HU">Hungarian</option>
                        <option value="IS">Icelandic</option>
                        <option value="ID">Indonesian</option>
                        <option value="GA">Irish</option>
                        <option value="IT">Italian</option>
                        <option value="JA">Japanese</option>
                        <option value="JW">Javanese</option>
                        <option value="KO">Korean</option>
                        <option value="LA">Latin</option>
                        <option value="LV">Latvian</option>
                        <option value="LT">Lithuanian</option>
                        <option value="MK">Macedonian</option>
                        <option value="MS">Malay</option>
                        <option value="ML">Malayalam</option>
                        <option value="MT">Maltese</option>
                        <option value="MI">Maori</option>
                        <option value="MR">Marathi</option>
                        <option value="MN">Mongolian</option>
                        <option value="NE">Nepali</option>
                        <option value="NO">Norwegian</option>
                        <option value="FA">Persian</option>
                        <option value="PL">Polish</option>
                        <option value="PT">Portuguese</option>
                        <option value="PT-Br">Brasileiro</option>
                        <option value="PA">Punjabi</option>
                        <option value="QU">Quechua</option>
                        <option value="RO">Romanian</option>
                        <option value="RU">Russian</option>
                        <option value="SM">Samoan</option>
                        <option value="SR">Serbian</option>
                        <option value="SK">Slovak</option>
                        <option value="SL">Slovenian</option>
                        <option value="ES">Spanish</option>
                        <option value="SW">Swahili</option>
                        <option value="SV">Swedish </option>
                        <option value="TA">Tamil</option>
                        <option value="TT">Tatar</option>
                        <option value="TE">Telugu</option>
                        <option value="TH">Thai</option>
                        <option value="BO">Tibetan</option>
                        <option value="TO">Tonga</option>
                        <option value="TR">Turkish</option>
                        <option value="UK">Ukranian</option>
                        <option value="UR">Urdu</option>
                        <option value="UZ">Uzbek</option>
                        <option value="VI">Vietnamese</option>
                        <option value="CY">Welsh</option>
                        <option value="XH">Xhosa</option>
                    </select>
                </label>
                <button type="submit">Enviar</button>
            </fieldset>


        </form>
    )
}