import React from 'react'
import PopularList from '../containers/popularList'
import Search from '../components/search'

const App = () => (
    <div>
        <h3 className={"red"}>Popular Movies</h3>
        <Search/>
        <PopularList />
    </div>
);

export default App;
