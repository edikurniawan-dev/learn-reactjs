import React from 'react';
import Card from './components/Card';

function App() {
    return (
        <div className="py-4">
            <div className="container">
                <h4>The Post</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            content={{
                                imageUrl: 'http://placekitten.com/g/300/200',
                                title: 'First Post',
                                published: '8 June 2021',
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            content={{
                                imageUrl: 'http://placekitten.com/300/200',
                                title: 'Second Post',
                                published: '8 July 2021',
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            content={{
                                imageUrl: 'http://placekitten.com//300/200',
                                title: 'Third Post',
                                published: '8 August 2021',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
