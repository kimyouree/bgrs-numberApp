import React from "react";
import ListItem from "./ListItem";

const List = props => {
    const { numbers } = props;

    const listOfNumbers = numbers.map((element, index) => {
        if (index === numbers.length - 1) {
            // -1!!! - applies the fade-in effect
            return <ListItem stylish="show" number={element} id={index} key={index} />;
        }
        return <ListItem number={element} id={index} key={index} />;
    });

    return <ul>{listOfNumbers}</ul>;
};
export default List;
