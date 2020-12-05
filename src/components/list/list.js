import React from 'react';
import ListItem from '../listItem/listItem';
import './list.scss';
const List = (props) => {
    let items = props.items;
    let listItems = items.map((item) => <ListItem value={item} key={item.id} />);
    return <ul className="list">{listItems}</ul>;
};
export default List;
