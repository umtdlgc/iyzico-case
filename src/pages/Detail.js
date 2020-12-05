import React, { useEffect, useState } from 'react';
import Character from './../components/character/character';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState('');
    const [loadedCharacter, setloadedCharacter] = useState(null);
    const [lastFiveEpisode, setLastFiveEpisode] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + id)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setHasError(data.error);
                } else {
                    setloadedCharacter(data);
                    let lastFiveEpisode = '';
                    data.episode
                        .reverse()
                        .slice(0, 5)
                        .forEach(function (item) {
                            lastFiveEpisode += item.match(/\/([^\/]+)\/?$/)[1] + ',';
                        });

                    return fetch('https://rickandmortyapi.com/api/episode/' + lastFiveEpisode);
                }
                setIsLoading(false);
            })
            .then((response) => response.json())
            .then((data) => {
                setLastFiveEpisode(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    if (isLoading) {
        return (
            <div className="loader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" stroke-miterlimit="10" />
                </svg>
            </div>
        );
    } else if (hasError != '') {
        return <div className="errorMessage">{hasError}</div>;
    } else {
        return (
            <div>
                <Character char={loadedCharacter} lastepisode={lastFiveEpisode}></Character>
            </div>
        );
    }
};
export default Detail;
