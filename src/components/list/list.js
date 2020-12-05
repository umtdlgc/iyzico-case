import React from 'react';
import ListItem from '../listItem/listItem';
const List = (props) => {
    let items = props.items;
    let listItems = items.map((item) => <ListItem value={item} key={item.id} />);
    return <ul>{listItems}</ul>;
};
export default List;
