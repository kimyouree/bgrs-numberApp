import React from "react";

const ListItem = props => {
    const { number, id, stylish } = props;
    return (
        <li className={stylish}>
            {id}. entered: <b>{number}</b>
        </li>
    );
};
export default ListItem;
