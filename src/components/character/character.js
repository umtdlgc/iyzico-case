import './character.scss';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Context from '../../context/store';

const Character = (props) => {
    const [loadedCharacter, setloadedCharacter] = useState(null);
    const [lastFiveEpisode, setLastFiveEpisode] = useState([]);

    const { id } = useParams();
    const history = useHistory();

    const returnBack = () => {
        history.action == 'POP' ? history.push('/') : history.goBack();
    };

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + id)
            .then((response) => response.json())
            .then((data) => {
                setloadedCharacter(data);
                let lastFiveEpisode = '';
                data.episode
                    .reverse()
                    .slice(0, 5)
                    .forEach(function (item) {
                        lastFiveEpisode += item.match(/\/([^\/]+)\/?$/)[1] + ',';
                    });

                return fetch('https://rickandmortyapi.com/api/episode/' + lastFiveEpisode);
            })
            .then((response) => response.json())
            .then((data) => {
                setLastFiveEpisode(data);
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
                        <span>Last Five Seen In:</span>
                        <span>
                            <ul>
                                {lastFiveEpisode.map((item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        </span>
                    </div>
                </div>
                <button onClick={returnBack} className="btn">
                    <div className="bk-btn">
                        <div className="bk-btn-triangle"></div>
                        <div className="bk-btn-bar"></div>
                    </div>
                </button>
            </div>
        );
    } else {
        return (
            <div className="loader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div>
        );
    }
};
export default Character;
