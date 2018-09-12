import React from "react";

const ListItem = props => {
    const { number, id, stylish } = props;
    //console.log(props); // why is this undefined - why is props.stylish not being passed?
    return (
        <li className={stylish}>
            {id}. entered: <b>{number}</b>
        </li>
    );
};
export default ListItem;
