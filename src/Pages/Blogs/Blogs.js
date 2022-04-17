import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center'>My Blogs</h1>
            <div>
                <h2>Question: Difference between authorization and authentication?</h2>
                <p>Answer: Authentication is a process by which an user get permitted to explore or use certain data by validate their identity (username/ password etc). Authorization is a process where user have specifying access privileges and rights to the resources connected with data security. Authorized user is like Admin/moderator. </p>
            </div>
            <div>
                <h2>Question: Why are you using firebase? What other options do you have to implement authentication??</h2>
                <p>Answer: By using firebase we can build strong and resourceful application which allow secured access to database directly from client side. It’s a real-time database. Except firebase there are some other options to implement authentications. Some of them are Parse,Back4app,Kinvey,Backendless,Kuzzle,Pubnub etc. </p>
            </div>
            <div>
                <h2>Question: What other services does firebase provide other than authentication?</h2>
                <p>Answer: fire base provides many services other than authentication. Some of them are-</p>
                <ul>
                    <li>Hosting</li>
                    <li>Cloud Firestore</li>
                    <li>Cloud function</li>
                    <li>Google Analytics</li>
                    <li>Cloud Messaging</li>
                    <li>Cloud Storage</li>
                    <li>Prediction</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;