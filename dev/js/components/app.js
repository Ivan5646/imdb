import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import KittiesList from '../containers/kitties-list';
import PoductList from '../containers/productList';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
        <hr/>
        <h2>Kitties List:</h2>
        <KittiesList />
        <h2>Popular List:</h2>
        <PoductList />
    </div>
);

export default App;