import React, { Component } from "react";
import InputField from "./components/InputField.jsx";
import List from "./components/List.jsx";
import { CSSTransition } from "react-transition-group";

class App extends Component {
    constructor() {
        super();
        this.state = {
            numbers: ["0", "1"],
            pastEntries: ["0", "1"],
            fade: true,
            lastEntered: "1"
        };
        this.addNum = this.addNum.bind(this);
    }

    // adds new entry to list
    addNum(text) {
        const { numbers, pastEntries } = this.state;
        const thisArr = Array.from(this.state.numbers);
        const pastEntriesCopy = Array.from(this.state.pastEntries);

        const sorted = text
            .split("")
            .sort()
            .join("");

        const checkPastEntries = pastEntriesCopy.includes(text);

        if (!checkPastEntries) {
            const newNumbers = thisArr.concat(sorted);
            const finalPastEntries = pastEntries.concat(text);
            this.setState({
                numbers: newNumbers,
                pastEntries: finalPastEntries,
                lastEntered: text
            });
        }
    }

    render() {
        const { numbers, fade } = this.state;
        return (
            <div className="container">
                <h2>Number Counter</h2>
                <CSSTransition in={fade} appear={true} timeout={600} classNames="fade">
                    <div className="container inner">
                        <p className="sub-heading">
                            Sorts & adds number to the list, no duplicates
                        </p>
                        <InputField addNum={this.addNum} />

                        <List numbers={numbers} />

                        <p className="last-entered">
                            Last entered number: {this.state.lastEntered}
                        </p>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}
export default App;
