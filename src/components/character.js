import "./character.scss";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Character = (props) => {
    const [loadedCharacter, setloadedCharacter] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + id)
            .then((response) => response.json())
            .then((data) => {
                setloadedCharacter(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    if (loadedCharacter != null) {
        return (
            <div className="character-box">
                <div className="image">
                    <img src={loadedCharacter.image} alt="character-image" />
                </div>
                <div className="info">
                    <div>
                        <span>Name:</span>
                        <span>{loadedCharacter.name}</span>
                    </div>
                    <div>
                        <span>From:</span>
                        <span>{loadedCharacter.location.name}</span>
                    </div>
                    <div>
                        <span>Last Five Episode In:</span>
                        <span>
                            <ul>
                                {[...loadedCharacter.episode]
                                    .reverse()
                                    .slice(0, 5)
                                    .map(function (item) {
                                        return <li key={item}>{item}</li>;
                                    })}
                            </ul>
                        </span>
                    </div>
                </div>
                <Link to='/'>
                    Back
                </Link>
            </div>
        );
    } else {
        return <div>Loading</div>;
    }
};
export default Character;
