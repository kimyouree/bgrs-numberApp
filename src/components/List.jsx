import React from "react";
import ListItem from "./ListItem";

const List = props => {
    const { numbers } = props,
        listOfNumbers = [];
    // console.log(numbers);
    numbers.map(element => {
        return element.index === numbers.length
            ? listOfNumbers.push(
                  <ListItem
                      styled="show"
                      number={element.num}
                      id={element.index}
                      key={element.index}
                      style={{ opacity: 0 }}
                  />
              )
            : listOfNumbers.push(
                  // how to make each new list item fade in?

                  <ListItem
                      style={{ opacity: 1 }}
                      number={element.num}
                      id={element.index}
                      key={element.index}
                  />
              );
    });

    return <ul className="fadeIn">{listOfNumbers}</ul>;
};
export default List;
// className={element.index === numbers.length ? "fade-appear" : "fade"}
