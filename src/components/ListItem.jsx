import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListItem = props => {
    const { number, id } = props;
    return (
        <TransitionGroup className="list-container">
            <CSSTransition key={props.timesClicked} timeout={10000} classNames="fade">
                <li className="list-item">
                    {id}. entered: <b>{number}</b>
                </li>
            </CSSTransition>
        </TransitionGroup>
    );
};
export default ListItem;
