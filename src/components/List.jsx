import React from "react";
import ListItem from "./ListItem";

const List = props => {
    const { numbers } = props,
        listOfNumbers = [];
    numbers.map(element => {
        return listOfNumbers.push(
            <ListItem number={element.num} id={element.index} key={element.index} />
        );
    });

    return <ul>{listOfNumbers}</ul>;
};
export default List;
