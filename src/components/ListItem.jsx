import React from "react";

const ListItem = props => {
    const { number, id, styled } = props;
    return (
        <li className={styled}>
            {id}. entered: <b>{number}</b>
        </li>
    );
};
export default ListItem;
