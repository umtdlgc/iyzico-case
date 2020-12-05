import './character.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Character = (props) => {
    const char = props.char;
    const lastepisode = props.lastepisode;
    const history = useHistory();
    console.log(lastepisode);
    const returnBack = () => {
        history.action === 'POP' ? history.push('/') : history.goBack();
    };
    return (
        <div className="character-box">
            <div className="image">
                <img src={char.image} alt={char.name} />
            </div>
            <div className="info">
                <div>
                    <span>Name:</span>
                    <span>{char.name}</span>
                </div>
                <div>
                    <span>From:</span>
                    <span>{char.location.name}</span>
                </div>
                <div>
                    <span>Last Five Seen In:</span>
                    <span>
                        <ul>
                            {lastepisode.map((item) => (
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
};
export default Character;
