import { apiKey } from "../services/api";

async function getSessionID() {
    let request = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`)
    let response = await request.json()
    let Data = await response
    return Data
}

export default getSessionID