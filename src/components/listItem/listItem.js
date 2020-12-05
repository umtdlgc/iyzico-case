import React from 'react';
import './listItem.scss';
import { Link } from 'react-router-dom';

function ListItem(props) {
    const value = props.value;
    return (
        <li className="list-item-box" data-id={value.id}>
            <Link to={'detail/' + value.id}>
                <div className="image">
                    <img src={value.image} alt="character-image" />
                </div>
                <div className="name">
                    {value.id}-{value.name}
                </div>
            </Link>
        </li>
    );
}

export default ListItem;
