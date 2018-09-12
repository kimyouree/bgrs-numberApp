import React from "react";
import ListItem from "./ListItem";

const List = props => {
    const { numbers } = props; // ,
    //listOfNumbers = []; // why doesn't the show class work for new submissions?

    const listOfNumbers = numbers.map((element, index) => {
        if (index === numbers.length - 1) { // ALWAYS REMEMBER THIS
            return <ListItem stylish="show" number={element} id={index} key={index} />;
        }
        return <ListItem number={element} id={index} key={index} />;
    });
    // let newthing = stuff.map(item => item.thing);

    return <ul>{listOfNumbers}</ul>;
};
export default List;
