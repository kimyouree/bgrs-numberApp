import React, { Component } from "react";
import InputField from "./components/InputField.jsx";
import List from "./components/List.jsx";
import { CSSTransition, Transition } from "react-transition-group";

class App extends Component {
    constructor() {
        super();
        this.state = {
            numbers: [
                {
                    num: 0,
                    index: 1
                },
                {
                    num: 1,
                    index: 2
                }
            ],
            fade: true
        };
        this.addNum = this.addNum.bind(this);
    }

    // adds new entry to list
    addNum(text) {
        const newNumbers = Array.from(this.state.numbers);
        const numEntry = {
            num: parseInt(text, 10),
            index:
                this.state.numbers.length > 0
                    ? this.state.numbers[this.state.numbers.length - 1].index + 1
                    : 0
        };

        // checks for duplicate entries
        for (let i = 0; i < this.state.numbers.length; i++) {
            if (this.state.numbers[i].num.toString() === text) {
                return;
            }
        }
        newNumbers.push(numEntry);
        this.setState({ numbers: newNumbers });
    }

    render() {
        const { numbers, fade } = this.state;
        return (
            <div className="container">
                <h3>Number Counter</h3>
                <CSSTransition in={fade} appear={true} timeout={600} classNames="fade">
                    <div className="container inner">
                        <p className="sub-heading">Adds a number to the list, no duplicates</p>
                        <InputField addNum={this.addNum} />

                        <List numbers={numbers} />

                        <p className="last-entered">
                            Last entered number:{" "}
                            {this.state.numbers[this.state.numbers.length - 1].num}
                        </p>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}
export default App;
