import React from "react";

const ListItem = props => {
    const { number, numbers, id, styled } = props;
    // console.log(props);
    //console.log(numbers.length);
    // console.log(id === numbers.length);
    return (
        <li className={styled}>
            {id}. entered: <b>{number}</b>
        </li>
    );
};
export default ListItem;
