import React, { Component } from 'react';
import './formStyles.css';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: '',
            address: '',
            file: null
        };
    }

    handleChange = (event) => {
        const { name, value, type } = event.target;
        this.setState({ [name]: type === "file" ? event.target.files[0] : value });
    };

    submitValues = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitValues} className="form-container">
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                    <br />
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <br />

                    {/* Gender Section */}
                    <label>Gender</label>
                    <div className="gender-group">
                        <div className="gender-option">
                            <input type="radio" name="gender" value="male" onChange={this.handleChange} />
                            <label>Male</label>
                        </div>
                        <div className="gender-option">
                            <input type="radio" name="gender" value="female" onChange={this.handleChange} />
                            <label>Female</label>
                        </div>
                        <div className="gender-option">
                            <input type="radio" name="gender" value="other" onChange={this.handleChange} />
                            <label>Other</label>
                        </div>
                    </div>

                    <br />
                    <label>Address</label>
                    <textarea name="address" value={this.state.address} onChange={this.handleChange}></textarea>
                    <br />
                    <label>File</label>
                    <input type="file" name="file" onChange={this.handleChange} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default MyForm;
