import React from 'react';
import Search from '../components/search'
import Main from '../containers/main'
import SearchDb from '../containers/searchDb'


const App = () => (
    <div>
        <SearchDb/>
        <Search />
        <Main />
    </div>
);

export default App;
