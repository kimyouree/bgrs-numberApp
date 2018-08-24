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
                    <div className="input-group-btn">
                        <Input
                            onChange={this.changeHandler}
                            className="input-group-field"
                            required
                            placeholder="Input..."
                            l={6}
                            m={12}
                            s={12}
                            label="Please enter a number"
                            value={this.state.input}
                        />
                    </div>
                    <Button s={12} m={12} className="addBtn" waves="light">
                        ADD ME<Icon left>save</Icon>
                    </Button>
                </form>
            </Row>
        );
    }
}
export default InputField;
