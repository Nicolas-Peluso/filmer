import React from "react";
import { takevote } from "../components/main";
import Style from "./seriesDetail.module.css"

export default function DetailSeries(props) {
  console.log(props)
  const seriado = props.seriado;
  const none = () => {
    return <></>;
  };
  const OnPropsOk = () => {

    return (
      <>
        <div className={Style.Seriesdetail}>
          <div className={Style.imgContainer} key="1">
            <img src={`https://image.tmdb.org/t/p/w500/${seriado.backdrop_path}`} alt="" key="2" />
            <p key={Math.random()}>{seriado.overview}</p>
          </div>
          <ul className={Style.ListaDeCriadores} key="3">
            {seriado.created_by.map(create => (
              <li key={create.id}>
                <p key={create.name}>criado por: {create.name}</p>
                <img src={`https://image.tmdb.org/t/p/w500/${create.profile_path}`} alt="nao foi possivel carregar a imagem" key={create.id + Math.random()} />
              </li>
            ))}
          </ul>
          <ul className={Style.InfoGeneral} key="4">
            <li key="5">
              <h1 key="6" className={Style.Titulo}>{seriado.name}</h1>
            </li>
            <li key="7">
              <p>Data de estreia: {seriado.first_air_date}</p>
            </li>
            <li key="8">
              <p>Status: {seriado.in_production ? "em produção" : "encerrado"}</p>
            </li>
            {seriado.last_air_date && <li key="9"><p key="10">ultimo episodio: {seriado.last_air_date}</p></li>}
            {seriado.genres.map(genero => (
              <li key={genero.id}>{genero.name}</li>
            ))}
            {seriado.next_episode_to_air && <><li key={Math.random()}>proximo episodio: {seriado.next_episode_to_air.air_date}</li>
              <li key="22">Numeros de epsódios:{seriado.next_episode_to_air.number_of_episodes}</li>
              <li key="23">Numeros de temporadas:{seriado.next_episode_to_air.number_of_seasons}</li>
            </>}
            {seriado.production_companies.map(compani => (
              <>
                <li key={compani.name}><p>{compani.name}</p></li>
                <li key={compani.id}><img src={`https://image.tmdb.org/t/p/w500/${compani.logo_path}`} alt="" /></li>
              </>
            ))}
          </ul>

          {seriado.networks.map(network => (

            <ul className={Style.networks}><h1>network(s):</h1>
              <li key={network.id}><p key={Math.random()}>Nome: {network.name}</p><img key={network.logo_path} src={`https://image.tmdb.org/t/p/w500/${network.logo_path}`} alt="" /></li>
            </ul>
          ))}
        </div>
        <div className={Style.SlideSeason}>
          {seriado.seasons.map(tempo => (
            <>
              <div className={Style.Inside}>
                <img key={tempo.id} src={`https://image.tmdb.org/t/p/w500/${tempo.poster_path}`} alt="" />
                <p key={tempo.id + Math.random()}>Nome da temporada: {tempo.name}</p>
                <p key={tempo.name}>{tempo.overview}</p>
                <p key={tempo.episode_count}>quantia de pesiodios: {tempo.episode_count}</p>
                <p key={tempo.air_date}>Lançou: {tempo.air_date}</p>
              </div>

            </>
          ))}
        </div>
        {seriado.last_episode_to_air &&
          <ul className={Style.LastEpisodi}>
            <h1>ultima temporada lançada</h1>
            <li key="11"><p key="12">data de estreia: {seriado.last_episode_to_air.air_date}</p></li>
            <li key="13"><p key="14">episodio numero: {seriado.last_episode_to_air.episode_number}</p></li>
            <li key="15"><p key="16">Nome: {seriado.last_episode_to_air.name}</p></li>
            <li key="17"><p key="18">descrição: {seriado.last_episode_to_air.overview}</p></li>
            <li key="19"><p key="20">temporada: {seriado.last_episode_to_air.season_number}</p></li>
            <li key="21"><img key="22" src={`https://image.tmdb.org/t/p/w500/${seriado.last_episode_to_air.still_path}`} /></li>
          </ul>
        }
      </>
    );
  };
  return !props.seriado ? none() : OnPropsOk();
}
