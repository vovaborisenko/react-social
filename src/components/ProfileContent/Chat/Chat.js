import React from 'react';
import Dialog from './Dialog/Dialog';

const Chat = () => {
    return (
        <div className="container-fluid container-posts">
            <div className="card-post">
                <div className="scrollbar-container">
                    <Dialog name="Alex" avatar="./img/user2.jpg" time="An hour ago" message="Lorem ipmus sdoedr"/>
                    <Dialog name="Marin" avatar="./img/user3.jpg" time="Yesterday" message="Ipmus sdoedr"/>
                    <Dialog name="Kate" avatar="./img/user4.jpg" time="2 days ago" message="Lorem ipmus sdoedr"/>
                    <Dialog name="John" avatar="./img/user5.jpg" time="4 days ago" message="hello, Lorem ipmus sdoedr"/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
