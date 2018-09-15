import React, { Component } from "react";
import { Button, Icon, Input, Row } from "react-materialize";

class InputField extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    changeHandler(e) {
        return !isNaN(e.target.value)
            ? this.setState({ input: e.target.value })
            : alert("Please enter a number");
    }

    handleInput(e) {
        e.preventDefault();
        this.props.addNum(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        /*  prevents entries with non-integer characters   */

        return (
            <Row>
                <form onSubmit={this.handleInput}>
                    <div className="input-group-field">
                        <Input
                            className="input"
                            onChange={this.changeHandler}
                            required
                            placeholder="Please enter a number..."
                            l={6}
                            s={10}
                            value={this.state.input}
                        />
                    </div>

                    <Button waves="light" className="addBtn">
                        ADD ME<Icon left>save</Icon>
                    </Button>
                </form>
            </Row>
        );
    }
}
export default InputField;
