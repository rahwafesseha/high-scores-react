import React from "react";
const PlayerScores = (props) => {
    return (
      <div className="Wrapper">
        <h1>High Scores Per Country</h1>
        <div className="cards">
          {props.scores.sort((a, b) => a.name.localeCompare(b.name)).map((city) => {
            return (
              <div className="scores-of-countries">
                <h2 className="city">High Scores:{city.name}</h2>
                <div>
                  {city.scores.map((person) => {
                    return (
                      <p className = "name">
                        {person.n}:{person.s}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );}


export default PlayerScores;