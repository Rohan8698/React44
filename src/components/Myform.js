import React, { Component } from 'react';
import './formStyles.css';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            skill: 'view'
        };
    }

    changeTextValue = (event) => {
        this.setState({ textValue: event.target.value });
    };

    changeSkill = (event) => {
        this.setState({ skill: event.target.value });
    };

    submitValues = (event) => {
        event.preventDefault();
        alert(`Form is submitted: ${this.state.textValue} ${this.state.skill}`);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitValues}>
                    <label>First Name</label>
                    <input type="text" value={this.state.textValue} onChange={this.changeTextValue} />
                    <br />
                    <label>Skill</label>
                    <select value={this.state.skill} onChange={this.changeSkill}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="view">View</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default MyForm;
