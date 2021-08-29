import React from "react";

export default function PersonPage(props) {
  console.log(props);
  const result = props.pessoa;
  const def = () => {
    return <h1>eres idiota tico</h1>;
  };
  const perosnDetailRight = () => {
    return (
      <div className="containerPessoa" style={{ backgroundColor: "white" }}>
        <ul
          style={{
            backgroundColor: "white",
            display: "inline-block",
            position: "absolute",
          }}
        >
          <h4>tambem conhecido como:</h4>
          {props.pessoa.also_known_as.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="bio" style={{ width: "500px", margin: "0px auto" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${result.profile_path}`}
            alt=""
          />
          <p style={{ padding: "10px", fontSize: "1.2em" }}>
            {result.biography}
          </p>

          <div className="info">
            {" "}
            <br />
            <p style={{ fontSize: "1.2em", textAlign: "center" }}>
              nascido em {result.birthday}
            </p>
            <p style={{ fontSize: "1.2em" }}>
              {result.deathday !== null ? result.deathday : null}
            </p>
            <p style={{ fontSize: "1.2em" }}>
              local de nascimento {result.place_of_birth}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return props.pessoa !== undefined ? perosnDetailRight() : def();
}
