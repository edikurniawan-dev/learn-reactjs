import React, { Component } from 'react';

class ClassExample extends Component {
    constructor() {
        super();

        this.state = {
            firstname: '',
            lastname: '',
            name: '',
        };
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();

        this.setState({
            name: `${this.state.firstname} ${this.state.lastname}`,
        });

        this.state.firstname = '';
        this.state.lastname = '';
    };

    render() {
        const { name } = this.state;
        return (
            <div className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Learn React</div>
                                <div className="card-body">
                                    <form onSubmit={this.submitHandler}>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="firstname"
                                                className="form-label"
                                            >
                                                Firstname
                                            </label>
                                            <input
                                                type="text"
                                                value={this.state.firstname}
                                                onChange={this.changeHandler}
                                                name="firstname"
                                                id="firstname"
                                                className="form-control"
                                            ></input>
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="lastname"
                                                className="form-label"
                                            >
                                                Lastname
                                            </label>
                                            <input
                                                type="text"
                                                value={this.state.lastname}
                                                onChange={this.changeHandler}
                                                name="lastname"
                                                id="lastname"
                                                className="form-control"
                                            ></input>
                                        </div>

                                        <div className="d-grid">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Show
                                            </button>
                                        </div>
                                    </form>
                                    <div className="card-footer">
                                        My name is {name ? name : '......'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassExample;
