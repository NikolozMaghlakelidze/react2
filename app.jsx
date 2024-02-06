import React from 'react';
import ReactDOM from 'react-dom';
//node js verafrit ver davayene da marto reactshi davwere kodi
let Navbar = () => {
    return <div>Navbar</div>;
};

let Footer = () => {
    return <div>Footer</div>;
};

let Wrapper = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

let momxmarebeli = ({ users, isUserLoggedIn }) => {
    if (!isUserLoggedIn) {
        return <p>sawiroa avtorizacia</p>;
    }

    if (users.length === 0) {
        return <p>momxmarebeli ar aris</p>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.saxeli} {user.gvari}, {user.asaki} years old
                </li>
            ))}
        </ul>
    );
};

const users = [
    { id: 1, saxeli: 'nika', gvari: 'maghlakelidze', asaki: 16 },
    { id: 2, saxeli: 'shoti', gvari: 'wiqarishvili', asaki: 17 },
    { id: 3, saxeli: 'nika', gvari: 'kikilashvili', asaki: 15 },
];

let App = () => {
    return (
        <Wrapper>
            <momxmarebeli users={users} isUserLoggedIn={true} />
        </Wrapper>
    );
};

ReactDOM.render(<App />, document.querySelector('.root'));