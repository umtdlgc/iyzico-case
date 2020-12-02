import "./listItem.scss";
import { Link } from "react-router-dom";

function ListItem(props) {
    const value = props.value;
    return (
        <li className="list-item-box">
            <Link to={'detail/'+value.id}>
                <div className="image">
                    <img src={value.image} alt="character-image" />
                </div>
                <div className="name">
                    {value.name}
                </div>
            </Link>
        </li>
    );
}

export default ListItem;
