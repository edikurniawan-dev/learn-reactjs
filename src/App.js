import React from 'react';

function App() {
    return (
        <div className="py-4">
            <div className="container">
                <h4>the post</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="http://placekitten.com/g/300/200"
                                alt=""
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h4>the first post</h4>
                                <small className="text-muted">
                                    published 6 feb 2021
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
