import React, { useState } from 'react';

function App() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setName(`${firstname} ${lastname}`);

        setFirstname('');
        setLastname('');
    };

    return (
        <div className="p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Learn React</div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="firstname"
                                            className="form-label">
                                            Firstname
                                        </label>
                                        <input
                                            type="text"
                                            value={firstname}
                                            onChange={(e) =>
                                                setFirstname(e.target.value)
                                            }
                                            name="firstname"
                                            id="firstname"
                                            className="form-control"></input>
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="lastname"
                                            className="form-label">
                                            Lastname
                                        </label>
                                        <input
                                            type="text"
                                            value={lastname}
                                            onChange={(e) =>
                                                setLastname(e.target.value)
                                            }
                                            name="lastname"
                                            id="lastname"
                                            className="form-control"></input>
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            className="btn btn-primary"
                                            type="submit">
                                            Show
                                        </button>
                                    </div>
                                </form>
                                <div className="card-footer">
                                    My name is {name ? name : '.......'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
