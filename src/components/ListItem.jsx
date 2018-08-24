import React from "react";

const ListItem = props => {
    const { number, id } = props;
    return (
        <li className="list-item">
            {id}. entered: <b>{number}</b>
        </li>
    );
};
export default ListItem;
